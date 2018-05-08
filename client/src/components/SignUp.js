import React, { Component } from 'react'
import NavBar from './NavBar'
import { Form, Container, SignUpFormWrapper, FormBody, FormInput, SignUpButton } from './styled-components/Form'
import { Redirect } from 'react-router-dom'
class SignUp extends Component {
    state = {
        name: '',
        username: '',
        image: '',
        phone: '',
        email: '',
        password: '',
        signedUp: false
    }

    signUp = (event) => {
        event.preventDefault()
        const newUser = {
            name: this.state.name,
            username: this.state.username, 
            phone: this.state.phone,
            image: this.state.image,
            email: this.state.email, 
            password: this.state.password
        }
        this.props.signUp(newUser)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render(){
        if(this.props.loggedIn === true){
            return(
              <Redirect to="/contacts" />
            )
          }
        return(
            <Container>
                <NavBar />
                <SignUpFormWrapper>
                    <FormBody>
                        <p>Welcome to Mesh!</p>
                        <Form onSubmit={this.signUp}>
                            <FormInput 
                                type="string"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                />
                            <FormInput 
                                type="string"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                                />
                            <FormInput 
                                type="string"
                                name="image"
                                placeholder="Profile Image"
                                onChange={this.handleChange}
                                />
                            <FormInput 
                                type="string"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                                />
                            <FormInput 
                                type="string"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                />
                            <FormInput 
                                type="string"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                />
                            <SignUpButton className="input-button" type="submit" value="Sign Up" />
                        </Form> 
                    </FormBody>
                </SignUpFormWrapper>
            </Container>
        )
    }
}

export default SignUp