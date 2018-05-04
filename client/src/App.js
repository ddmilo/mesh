import React, { Component } from 'react'
import SignUp from './components/SignUp'
import LoginUser from './components/LoginUser'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {
    currentUser: {},
    signedIn: false,
    loggedIn: false
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

  signUp = async(userInfo) => {
    console.log("Clicked Sign Up!")
      try{
            const response = await axios.post('/api/users', userInfo)
            const user = response.data
            console.log(user)
            this.setState({signedIn: true, currentUser: user})
        }
        catch(error){
            alert("Sign Up failed. Please try again.")
        }
  }

  render() {
    const LoginComponent = () => (<LoginUser loggedIn={this.state.loggedIn} loginUser={this.loginUser}/>)
    const SignUpComponent = () => (<SignUp signedIn={this.state.signedIn} signUp={this.signUp}/>)
    return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login_user" render={LoginComponent}/>
            <Route exact path="/signup" render={SignUpComponent}/>
          </Switch>
      </div>
    </Router>
    )
  }
}

export default App
