import React, { Component } from 'react'
import NavBar from './NavBar'
import { PersonImage } from './styled-components/Images'
import {
    Container,
    LoginWrapper,
    EditFormBody,
    EditFormInput,
    RadioOptions,
    FormInputBody,
    InputBoxContainer,
    RadioInputs,
    EditSubmitInput,
    EditButton,
    ActionContainer
  } from './styled-components/Form'
import { Link, Redirect } from 'react-router-dom'
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
        zip: '',
        redirect: false
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
        this.setState({redirect: true})
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }

    render(){
        if(this.state.redirect === true){
            return(
              <Redirect to="/contacts" />
            )
        }
        return(
            <Container>
                <NavBar />
                    <LoginWrapper>
                        <EditFormBody onSubmit={this.editContact}>
                            <FormInputBody>
                            <p>Edit {this.props.currentContact.name}</p>
                                <InputBoxContainer>
                                    <EditFormInput 
                                        type="string"
                                        name="name"
                                        placeholder={this.props.currentContact.name}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="username"
                                        placeholder={this.props.currentContact.username}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="image"
                                        placeholder={this.props.currentContact.phone}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="phone"
                                        placeholder={this.props.currentContact.phone}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="email"
                                        placeholder={this.props.currentContact.email}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="twitter"
                                        placeholder={this.props.currentContact.twitter}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="instagram"
                                        placeholder={this.props.currentContact.instagram}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="facebook"
                                        placeholder={this.props.currentContact.facebook}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="street"
                                        placeholder={this.props.currentContact.street}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="city"
                                        placeholder={this.props.currentContact.city}
                                        onChange={this.handleChange}
                                        />
                                    <EditFormInput 
                                        type="string"
                                        name="zip"
                                        placeholder={this.props.currentContact.zip}
                                        onChange={this.handleChange}
                                        />
                                </InputBoxContainer>
                            <RadioOptions>   
                                <RadioInputs>   
                                <label htmlFor="relation">Relation: </label>          
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
                                </RadioInputs>
                                <ActionContainer>
                                <EditButton>
                                    <EditSubmitInput className="input-button" type="submit" value="Edit Contact" />
                                </EditButton>
                                <EditButton>
                                    <Link to='/contacts'>Cancel</Link>
                                </EditButton>
                                </ActionContainer>
                            </RadioOptions>
                            </FormInputBody>
                    </EditFormBody> 
            </LoginWrapper>
            </Container>
        )
    }
}

export default EditContact