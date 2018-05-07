import React from 'react'
import { ContactImage, SocialImage, CrudImage } from './styled-components/Images'
import { ContactContainer, 
         ContactInfo, 
         ContactName, 
         IconsContainer, 
         ContactInfoContainer,
         RequestContainer,
         SocialContainer } from './styled-components/Containers'
import { Link } from 'react-router-dom'
const Contact = (props) => {
    const deleteContact = async() => {
        const userId = props.userId
        const contactId = props.contact.id
        props.deleteContact(userId, contactId)
    }
    const setCurrentContact = () => {
        const contact = props.contact
        props.setCurrentContact(contact)
    }
    
    return(
        <ContactContainer>
            <ContactInfo>
                <ContactImage src={props.contact.image} alt="Profile Picture"/>
                <ContactInfoContainer>
                    <ContactName>
                    <p>{props.contact.name}</p>
                    </ContactName>
                    <p>{props.contact.phone}</p>
                </ContactInfoContainer>
            </ContactInfo>
            <IconsContainer>
                <SocialContainer>
                    <a href={`https://twitter.com/${props.contact.twitter}`} target="_blank"><SocialImage src="https://i.imgur.com/BcFVelY.png"/></a>
                    <a href={`https://www.instagram.com/${props.contact.instagram}`} target="_blank"><SocialImage src="https://i.imgur.com/ipsgw73.png"/></a>
                    <a href={`https://www.facebook.com/${props.contact.facebook}`} target="_blank"><SocialImage src="https://i.imgur.com/8Ew6ev1.png"/></a>
                </SocialContainer>
                <RequestContainer onClick={()=>{setCurrentContact()}}>
                    <Link to='/edit_contact'><CrudImage src="https://i.imgur.com/wvOabn0.png"/></Link>
                    <CrudImage src="https://i.imgur.com/YcNLkpg.png" onClick={() => deleteContact()}/>
                </RequestContainer>
            </IconsContainer>
        </ContactContainer>
    )
}

export default Contact