import React, { Component } from 'react'
import { Container } from './styled-components/Containers'
import { Form } from './styled-components/Form'
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
        const contact = {
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
        event.preventDefault()
        this.props.newContact(contact)
        console.log("NewContact pushed")
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render(){
        if(this.props.newContactAdded === true){
            return(
              <Redirect to="/contacts" />
            )
          }
        return(
            <Container>
                <div>
                <Form onSubmit={this.newContact}>
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
                        name="twitter"
                        placeholder="Twitter Handle"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="instagram"
                        placeholder="Instagram Handle"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="facebook"
                        placeholder="Facebook Handle"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="street"
                        placeholder="Street Address"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="city"
                        placeholder="City"
                        onChange={this.handleChange}
                         />
                    <input 
                        type="string"
                        name="zip"
                        placeholder="Zipcode"
                        onChange={this.handleChange}
                         />
                         <p>Please select your preferred contact method:</p>
                    <div>                   
                        <input type="radio" id="choice1"
                        name="relation" value="friend" onChange={this.handleChange}
                        />
                        <label for="contactChoice1">Friend</label>

                        <input type="radio" id="choice2"
                        name="relation" value="family" onChange={this.handleChange}/>
                        <label for="contactChoice1">Family</label>

                        <input type="radio" id="choice3"
                        name="relation" value="date" onChange={this.handleChange}/>
                        <label for="contactChoice1">Date</label>

                        <input type="radio" id="choice4"
                        name="relation" value="class" onChange={this.handleChange}/>
                        <label for="contactChoice1">Class</label>

                        <input type="radio" id="choice5"
                        name="relation" value="job" onChange={this.handleChange}/>
                        <label for="contactChoice1">Job</label>

                        <input type="radio" id="choice6"
                        name="relation" value="network" onChange={this.handleChange}/>
                        <label for="contactChoice2">Network</label>

                        <input type="radio" id="choice7"
                        name="relation" value="other" onChange={this.handleChange}/>
                        <label for="contactChoice3">Other</label>
                    </div>
                    <input className="input-button" type="submit" value="Add Contact" />
        </Form> </div>
            </Container>
        )
    }
}

export default NewContact