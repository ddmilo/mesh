import React, { Component } from 'react'
import NavBar from './NavBar'
import { Form, 
         Container, 
         FormWrapper, 
         FormBody, 
         FormInput, 
         FormButton } from './styled-components/Form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { loginUser } from '../actions/thunk.actions.js'
class LoginUser extends Component {
    state = {
        username: '',
        password: '',
        loggedIn: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }
    handleLogin = (event) => {
      event.preventDefault()
      this.props.loginUser(this.state.username, this.state.loggedIn)
      this.setState({loggedIn: true})
    }

    render(){
        console.log(this.state.loggedIn)
      if(this.state.loggedIn === true){
        return(
          <Redirect to="/contacts" />
        )
      }
        return(
            <Container>
                <NavBar />
                <FormWrapper>
                <FormBody>
                    <p> Welcome Back!</p>
                    <Form onSubmit={this.handleLogin}>
                        <FormInput
                            type="string"
                            name="username"
                            placeholder="Email"
                            onChange={this.handleChange}
                            />
                        <FormInput 
                            type="string"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            />
                        <FormButton className="input-button" type="submit" value="Login" />
                    </Form>
                </FormBody>
                </FormWrapper>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser }
}

//does this have anything to do with map function?
export default connect(mapStateToProps, { push, loginUser })(LoginUser)
//the parameters above are the actions being called
//monad in JS, you can call a function and if it returns a function, you can immediately invoke the function that it 
//returns and UserPage is the parameter of the function that is returned
//recursion is when you call a function inside itself
//polymorphism is when you have a class (inside itself?)
