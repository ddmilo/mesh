import React, { Component } from 'react'
import { Container } from './styled-components/Containers'
import { Form } from './styled-components/Form'
import { Redirect } from 'react-router-dom'
class EditContact extends Component {
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

    editContact = (event) => {
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
        this.props.updateContact(contactInfo)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render(){
        if(this.props.redirect === true){
            return(
              <Redirect to="/contacts" />
            )
        }
        return(
            <Container>
                <div>
                <Form onSubmit={this.editContact}>
                    <input 
                        type="string"
                        name="name"
                        placeholder={this.props.currentContact.name}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="username"
                        placeholder={this.props.currentContact.username}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="image"
                        placeholder={this.props.currentContact.phone}
                        onChange={this.handleChange}
                         />
                           <input 
                        type="string"
                        name="phone"
                        placeholder={this.props.currentContact.phone}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="email"
                        placeholder={this.props.currentContact.email}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="twitter"
                        placeholder={this.props.currentContact.twitter}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="instagram"
                        placeholder={this.props.currentContact.instagram}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="facebook"
                        placeholder={this.props.currentContact.facebook}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="street"
                        placeholder={this.props.currentContact.street}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="city"
                        placeholder={this.props.currentContact.city}
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="zip"
                        placeholder={this.props.currentContact.zip}
                        onChange={this.handleChange}
                         />
                         <p>Please select your preferred contact method:</p>
                    <div>                   
                        <input type="radio" id="choice1"
                        name="relation" value="friend" onChange={this.handleChange}
                        />
                        <label htmlFor="contactChoice1">Friend</label>

                        <input type="radio" id="choice2"
                        name="relation" value="family" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice1">Family</label>

                        <input type="radio" id="choice3"
                        name="relation" value="date" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice1">Date</label>

                        <input type="radio" id="choice4"
                        name="relation" value="class" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice1">Class</label>

                        <input type="radio" id="choice5"
                        name="relation" value="job" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice1">Job</label>

                        <input type="radio" id="choice6"
                        name="relation" value="network" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice2">Network</label>

                        <input type="radio" id="choice7"
                        name="relation" value="other" onChange={this.handleChange}/>
                        <label htmlFor="contactChoice3">Other</label>
                    </div>
                    <input className="input-button" type="submit" value="Add Contact" />
        </Form> </div>
            </Container>
        )
    }
}

export default EditContact