import React, { Component } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import SideBar from './SideBar'
import { ContactsContainer, ContactsWrapper, ContactsBodyWrapper } from './styled-components/Containers'
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

    findRelation = (relation) => {
        this.setState({search: relation})
    }

    render() {
        if (this.props.loggedIn === false){
            alert("Log in to view your contacts")
            return(
                <Redirect to='/' />
            )
        }
        const orderedContacts = this.props.contacts.sort((a, b) => (a.name > b.name ? 1 : -1))
        const searchedContacts = orderedContacts.filter((contact)=>{
            if ((contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (contact.relation.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)){
                return contact
            }
        })
        const contactsList = searchedContacts.map((contact) => {
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
                <ContactsBodyWrapper>
                    <NavBarWrapper>
                        <Link to='/'><MeshImage src='https://i.imgur.com/Wfw20Fk.png' /></Link>
                        <input type='text' 
                               placeholder='Search Contacts'
                               onChange={this.handleChange}/>
                    </NavBarWrapper>
                    <ContactsWrapper>
                        <SideBar findRelation={this.findRelation}/>
                        <ContactsContainer>
                            {contactsList}
                        </ContactsContainer>
                    </ContactsWrapper>
                    <Footer />
                </ContactsBodyWrapper>
        )
    }
}
export default ContactsList