import React, { Component } from 'react'
import Contact from './Contact'
class ContactsList extends Component {
    componentWillMount(){
        this.props.getContacts()
    }
  
    render(){
        const contactsList = this.props.contacts.map((contact)=>{
            console.log(contact)
            return(
                <Contact 
                    key={contact.id}
                    contact={contact}
                />
            )
        })
        console.log(this.props.contacts)
        return(
            <div>
                {contactsList}
            </div>
        )
    }
}
export default ContactsList