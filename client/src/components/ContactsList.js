import React, { Component } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import SideBar from './SideBar'
import { ContactsContainer, ContactsWrapper, ContactsBodyWrapper, ProfileDiv } from './styled-components/Containers'
import { NavBarWrapper, SearchBar, SearchBarContainer } from './styled-components/NavBar'
import { MeshImage, MenuImage, MenuImageContainer, SearchIcon, ProfileImage } from './styled-components/Images'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getContacts } from '../actions/thunk.actions.js'

class ContactsList extends Component {
    state = {
        search: '',
        showMenu: true
    }
    componentWillMount() {
        this.props.getContacts(this.props.currentUser.id)
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value })
        event.preventDefault()
    }

    findRelation = (relation) => {
        this.setState({search: relation})
    }
    showMenu = () => {
        if (this.state.showMenu === true){
            this.setState({showMenu: false})
        }
        else{
        this.setState({showMenu: true})
    }
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
                        <MenuImageContainer onClick={()=>this.showMenu()}>
                            <MenuImage src='https://i.imgur.com/QNNZHFA.png'/>
                        </MenuImageContainer>
                        <SearchBarContainer>
                            <SearchIcon src='https://i.imgur.com/VDcz1Nn.png'/>
                            <SearchBar type='text' 
                                       placeholder='search'
                                       onChange={this.handleChange}/>
                        </SearchBarContainer>
                        <ProfileDiv onClick={()=>this.props.logout()}><ProfileImage src={this.props.currentUser.image}/>logout</ProfileDiv>
                        <Link to='/'><MeshImage src='https://i.imgur.com/Wfw20Fk.png?1' /></Link>
                    </NavBarWrapper>
                    <ContactsWrapper>
                        {this.state.showMenu ? <SideBar findRelation={this.findRelation}/> : null}
                        <ContactsContainer>
                            {contactsList}
                        </ContactsContainer>
                    </ContactsWrapper>
                    <Footer />
                </ContactsBodyWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return { contacts: state.contacts }
}

//does this have anything to do with map function?
export default connect(mapStateToProps, { push, getContacts })(ContactsList)
//the parameters above are the actions being called
//monad in JS, you can call a function and if it returns a function, you can immediately invoke the function that it 
//returns and UserPage is the parameter of the function that is returned
//recursion is when you call a function inside itself
//polymorphism is when you have a class (inside itself?)
