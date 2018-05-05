import React from 'react'
import { ContactImage, SocialImage, CrudImage } from './styled-components/Images'
import { ContactContainer, ContactInfo, ContactName } from './styled-components/Containers'
import { Link } from 'react-router-dom'
const Contact = (props) => {
    return(
        <ContactContainer>
            <ContactInfo>
            <ContactImage src={props.contact.image} alt="Profile Picture"/>
            <div>
                <ContactName>
                <p>{props.contact.name}</p>
                </ContactName>
                <p>{props.contact.nickname}</p>
            </div>
            </ContactInfo>
            <p>{props.contact.phone}</p>
            <div>
                <a href={`https://twitter.com/${props.contact.twitter}`} target="_blank"><SocialImage src="https://i.imgur.com/BcFVelY.png"/></a>
                <a href={`https://www.instagram.com/${props.contact.instagram}`} target="_blank"><SocialImage src="https://i.imgur.com/ipsgw73.png"/></a>
                <a href={`https://www.facebook.com/${props.contact.facebook}`} target="_blank"><SocialImage src="https://i.imgur.com/8Ew6ev1.png"/></a>
            </div>
            <div>
                <Link to='/'><CrudImage src="https://i.imgur.com/wvOabn0.png"/></Link>
                <Link to='/'><CrudImage src="https://i.imgur.com/YcNLkpg.png"/></Link>
            </div>
        </ContactContainer>
    )
}

export default Contact