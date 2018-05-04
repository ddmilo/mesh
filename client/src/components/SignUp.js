import React, { Component } from 'react'
import { Container } from './styled-components/Containers'
import { Form } from './styled-components/Form'

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

    signUp = async() => {
        const newUser = {
            name: this.state.name,
            username: this.state.username, 
            phone: this.state.phone,
            image: this.state.password_confirmation,
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
        return(
            <Container>
                <div>
                <Form onSubmit={() => this.signUp()}>
                    <input 
                        type="string"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="image"
                        placeholder="Profile Image"
                        onChange={this.handleChange}
                         />
                           <input 
                        type="string"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                         />
                    <input className="input-button" type="submit" value="Sign Up" />
        </Form> </div>
            </Container>
        )
    }
}

export default SignUp