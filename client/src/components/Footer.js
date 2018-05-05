import React from 'react'
import { NewContactImage } from './styled-components/Images'
import { FooterContainer } from './styled-components/Containers'
import { Link  } from 'react-router-dom'
const Footer = () => {
    return(
        <FooterContainer>
            <NewContactImage src='https://i.imgur.com/5O7JcNl.png'/>
        </FooterContainer>
    )
}

export default Footer