import React, { Component } from 'react'
import Contact from './Contact'
class ContactsList extends Component {
    componentWillMount(){
        this.props.getContacts()
    }
  
    render(){
        const orderedContacts = this.props.contacts.sort((a, b)=>(a.name > b.name ? 1 : -1))
        console.log("HELLLO", orderedContacts)
        const contactsList = orderedContacts.map((contact)=>{
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