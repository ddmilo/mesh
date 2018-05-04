import React, { Component } from 'react'
import { Container } from './styled-components/Containers'
import { Form } from './styled-components/Form'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }
    handleLogin = (event) => {
      event.preventDefault()
      this.props.loginUser(this.state.username)
    }

    render(){
        return(
            <Container>
                <div><p> Welcome Back </p>
                <Form onSubmit={this.handleLogin}>
                    <input 
                        type="string"
                        name="username"
                        placeholder="Email"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                         />
                    <input className="input-button" type="submit" value="Login" />
                </Form>
                </div>
            
               
            </Container>
        )
    }
}

export default Login