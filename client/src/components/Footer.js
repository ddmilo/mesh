import React from 'react'
import { NewContactImage } from './styled-components/Images'
import { FooterContainer } from './styled-components/Containers'
import { Link  } from 'react-router-dom'
const Footer = () => {
    return(
        <FooterContainer>
            <Link to='/new_contact'><NewContactImage src='https://i.imgur.com/mJjf6sd.png'/></Link>
        </FooterContainer>
    )
}

export default Footer