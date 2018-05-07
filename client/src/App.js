import React, { Component } from 'react'
import SignUp from './components/SignUp'
import LoginUser from './components/LoginUser'
import Home from './components/Home'
import ContactsList from './components/ContactsList'
import NewContact from './components/NewContact'
import EditContact from './components/EditContact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {
    currentUser: {},
    contacts: [],
    loggedIn: false,
    newContactAdded: false,
    redirect: false,
    currentContact: {}
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
    try{
      const response = await axios.get(`/api/users/${user_id}/contacts`)
      const contacts = response.data
      this.setState({contacts})
    }
    catch(error){
      console.log(error)
    }
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
  newContact = async(contactInfo) => {
    try{
      const user_id = this.state.currentUser.id
      const response = await axios.post(`/api/users/${user_id}/contacts`, contactInfo)
      console.log(response)
      this.setState({newContactAdded: true})
    }
    catch(error){
      console.log(error)
    }
  }
  deleteContact = async(userId, contactId) => {
    try{
        axios.delete(`/api/users/${userId}/contacts/${contactId}`)
        alert("contact deleted")
        this.setState({redirect: true})
    }
    catch(error){
    }
}
setCurrentContact = (contact) =>{
  this.setState({currentContact: contact})
}
updateContact = async(updatedContact) =>{
  const currentContact = this.state.currentContact
  const contactId = this.state.currentContact.id
  const userId = this.state.currentUser.id
  try {
      await axios.patch(`/api/users/${userId}/contacts/${contactId}`, updatedContact, currentContact)
      console.log("UPDATEIT")
      this.setState({ redirect: true })
  }
  catch (err) {
      console.log(err)
  }
}

logout = () => {
    this.setState({currentUser: {}, loggedIn: false})
}

  render() {
    const LoginComponent = () => (<LoginUser loggedIn={this.state.loggedIn}
                                             loginUser={this.loginUser}/>)
    const SignUpComponent = () => (<SignUp loggedIn={this.state.loggedIn} 
                                           signUp={this.signUp}/>)
    const ContactsComponent = () => (<ContactsList redirect={this.state.redirect} 
                                                   setCurrentContact={this.setCurrentContact}
                                                   deleteContact={this.deleteContact}
                                                   getContacts={this.getContacts}
                                                   contacts={this.state.contacts}
                                                   loggedIn={this.state.loggedIn}
                                                   currentUser={this.state.currentUser}
                                                   userId={this.state.currentUser.id}
                                                   logout={this.logout}/>)
    const NewContactComponent = () => (<NewContact newContact={this.newContact}
                                                   newContactAdded={this.state.newContactAdded} 
                                                   userId={this.state.currentUser.id}/>) 
    const EditContactComponent = () => (<EditContact redirect={this.state.redirect} 
                                                     currentContact={this.state.currentContact} 
                                                     updateContact={this.updateContact}/>) 
    return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login_user" render={LoginComponent}/>
            <Route exact path="/signup" render={SignUpComponent}/>
            <Route exact path="/contacts" render={ContactsComponent}/>
            <Route exact path="/new_contact" render={NewContactComponent}/>
            <Route exact path="/edit_contact" render={EditContactComponent}/>
          </Switch>
      </div>
    </Router>
    )
  }
}

export default App
