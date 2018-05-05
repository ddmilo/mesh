import React, { Component, Fragment } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import { ContactsContainer, ContactsWrapper } from './styled-components/Containers'
import { NavBarWrapper } from './styled-components/NavBar'
import { MeshImage } from './styled-components/Images'
import { Link, Redirect } from 'react-router-dom'

class ContactsList extends Component {
    state = {
        search: ''
    }
    componentWillMount() {
        this.props.getContacts()
    }
    
    handleChange = (event) => {
        this.setState({ search: event.target.value })
        event.preventDefault()
    }

    render() {
        if (this.props.loggedIn === false){
            alert("Log in to view your contacts")
            return(
                <Redirect to='/' />
            )
        }
        const orderedContacts = this.props.contacts.sort((a, b) => (a.name > b.name ? 1 : -1))
        const contactsList = orderedContacts.map((contact) => {
            return (
                <Contact
                    key={contact.id}
                    contact={contact}
                    userId={this.props.userId}
                    deleteContact={this.props.deleteContact}
                    setCurrentContact={this.props.setCurrentContact}
                />
            )
        })

        return (
            <div>
                {this.props.loggedIn ? 
                <Fragment>
                    <NavBarWrapper>
                        <Link to='/'><MeshImage src='https://i.imgur.com/Wfw20Fk.png' /></Link>
                        <input type='text' 
                               placeholder='Search Contacts'
                               onChange={this.handleChange}/>
                    </NavBarWrapper>
                    <ContactsWrapper>
                        <ContactsContainer>
                        {contactsList}
                        </ContactsContainer>
                    </ContactsWrapper>
                    <Footer />
                </Fragment>
                 :
                    <Redirect to='/' />
                }
            </div>
        )
    }
}
export default ContactsList