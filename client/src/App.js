import React, { Component } from 'react'
import SignUp from './components/SignUp'
import LoginUser from './components/LoginUser'
import Home from './components/Home'
import ContactsList from './components/ContactsList'
import NewContact from './components/NewContact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {
    currentUser: {},
    contacts: [],
    loggedIn: false,
    newContactAdded: false
  }

  signUp = async(userInfo) => {
    try{
          const response = await axios.post('/api/users', userInfo)
          const user = response.data
          this.setState({loggedIn: true, currentUser: user})
      }
      catch(error){
          alert("Sign Up failed. Please try again.")
      }
}
  
  loginUser = async(username)=>{
    try{
      const response = await axios.get(`/api/users/retrieve/${username}`)
      this.setState({loggedIn: true, currentUser: response.data[0]})
    }
    catch(error){
      console.log(error)
    }
    
  }

  getContacts = async() => {
    const user_id = this.state.currentUser.id
    console.log(user_id)
    try{
      const response = await axios.get(`/api/users/${user_id}/contacts`)
      const contacts = response.data
      console.log(contacts)
      this.setState({contacts})
    }
    catch(error){
      console.log(error)
    }
  }
  createPost(event){
    this.props.showPostForm()
    event.preventDefault()
    axios.post(`/api/cities/${this.state.city_id}/posts`, this.state.newPost)
    .then((res) => { this.props.getPosts()})
    .catch((error) => {console.log(error)}) 
}
  newContact = async() => {
    console.log("Called new contact in App.js")
    // const contact = await axios.post(`/api/users/${user_id}/contacts`)
  }


  render() {
    const LoginComponent = () => (<LoginUser loggedIn={this.state.loggedIn} loginUser={this.loginUser}/>)
    const SignUpComponent = () => (<SignUp loggedIn={this.state.loggedIn} signUp={this.signUp}/>)
    const ContactsComponent = () => (<ContactsList getContacts={this.getContacts} contacts={this.state.contacts} loggedIn={this.state.loggedIn}/>)
    const NewContactComponent = () => (<NewContact newContact={this.newContact} newContactAdded={this.state.newContactAdded} userId={this.state.currentUser.id}/>) 
    return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login_user" render={LoginComponent}/>
            <Route exact path="/signup" render={SignUpComponent}/>
            <Route exact path="/contacts" render={ContactsComponent}/>
            <Route exact path="/new_contact" render={NewContactComponent}/>
          </Switch>
      </div>
    </Router>
    )
  }
}

export default App
