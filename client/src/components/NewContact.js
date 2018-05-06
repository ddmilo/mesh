import React, { Component } from 'react'
import NavBar from './NavBar'
import { Form, 
         Container, 
         FormWrapper, 
         NewContactFormBody, 
         NewContactInput, 
         SignUpButton, 
         RadioOptions
         } from './styled-components/Form'
import { Redirect } from 'react-router-dom'
class NewContact extends Component {
    state = {
        name: '',
        username: '',
        image: '',
        relation: '',
        instagram: '',
        twitter: '',
        facebook: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        zip: ''
    }

    newContact = (event) => {
        event.preventDefault()
        const contactInfo = {
            user_id: this.props.userId,
            name: this.state.name,
            username: this.state.username,
            image: this.state.image,
            relation: this.state.relation,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            phone: this.state.phone,
            email: this.state.email,
            street: this.state.street,
            city: this.state.city,
            zip: this.state.zip
        }
        this.props.newContact(contactInfo)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render() {
        if (this.props.newContactAdded === true) {
            return (
                <Redirect to="/contacts" />
            )
        }
        return (
            <Container>
                <NavBar />
                <FormWrapper>
                    <p>Add New Contact!</p>
                    <NewContactFormBody>
                        <Form onSubmit={this.newContact}>
                            <NewContactInput
                                type="string"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="image"
                                placeholder="Profile Image"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="twitter"
                                placeholder="Twitter Handle"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="instagram"
                                placeholder="Instagram Handle"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="facebook"
                                placeholder="Facebook Handle"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="street"
                                placeholder="Street Address"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="city"
                                placeholder="City"
                                onChange={this.handleChange}
                            />
                            <NewContactInput
                                type="string"
                                name="zip"
                                placeholder="Zipcode"
                                onChange={this.handleChange}
                            />
                            <RadioOptions>
                                    <p>Contact Type: </p>
                                    <input
                                        type="radio"
                                        id="choice"
                                        name="relation"
                                        value="friend" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice1">Friend</label>

                                    <input
                                        type="radio"
                                        id="choice"
                                        name="relation"
                                        value="family" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice1">Family</label>

                                    <input
                                        type="radio" 
                                        id="choice"
                                        name="relation" 
                                        value="date" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice1">Date</label>

                                    <input 
                                        type="radio" 
                                        id="choice"
                                        name="relation" 
                                        value="class" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice1">Class</label>

                                    <input
                                        type="radio" 
                                        id="choice"
                                        name="relation" 
                                        value="job" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice1">Job</label>

                                    <input 
                                        type="radio" 
                                        id="choice"
                                        name="relation" 
                                        value="network" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice2">Network</label>

                                    <input 
                                        type="radio" 
                                        id="choice"
                                        name="relation" 
                                        value="other" 
                                        onChange={this.handleChange} />
                                    <label htmlFor="contactChoice3">Other</label>
                            </RadioOptions>
                            <RadioOptions>
                                <input className="input-button" type="submit" value="Add Contact" />
                            </RadioOptions>
                        </Form>
                    </NewContactFormBody>
                </FormWrapper>
            </Container>
        )
    }
}

export default NewContact