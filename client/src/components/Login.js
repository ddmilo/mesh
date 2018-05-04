import React, { Component } from 'react'
import { Container } from './styled-components/Containers'
import { Form } from './styled-components/Form'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render(){
        return(
            <Container>
                <div><p> Welcome Back </p>
                <Form onSubmit={() => this.login()}>
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
                    <input className="input-button" type="submit" value="Login" />
                </Form>
                </div>
            
               
            </Container>
        )
    }
}

export default Login