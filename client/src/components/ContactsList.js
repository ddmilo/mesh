import React, { Component } from 'react'
import Contact from './Contact'
import { NavBarWrapper } from './styled-components/NavBar'
import { MeshImage } from './styled-components/Images'
import { Link } from 'react-router-dom'
class ContactsList extends Component {
    componentWillMount(){
        this.props.getContacts()
    }
  
    render(){
        const orderedContacts = this.props.contacts.sort((a, b)=>(a.name > b.name ? 1 : -1))
        const contactsList = orderedContacts.map((contact)=>{
            return(
                <Contact 
                    key={contact.id}
                    contact={contact}
                />
            )
        })
        return(
            <div>
                <NavBarWrapper>
                    <Link to='/'><MeshImage src='https://i.imgur.com/Wfw20Fk.png'/></Link>
                </NavBarWrapper>
                {contactsList}
            </div>
        )
    }
}
export default ContactsList