import React from 'react'
import { NavBarContainer } from './styled-components/NavBar'
import { MeshImage } from './styled-components/Images'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <NavBarContainer>
            <Link to='/'><MeshImage src='https://i.imgur.com/wObEQfD.png'/></Link>
        </NavBarContainer>
    )
}
export default NavBar