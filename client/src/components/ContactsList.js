import React, { Component } from 'react'

class ContactsList extends Component {
    componentWillMount(){
        this.props.getContacts()
    }
    render(){
        console.log(this.props.contacts)
        return(
            <div>
                Hello from ContactsList
            </div>
        )
    }
}
export default ContactsList