import React from 'react'
import { NavBarContainer } from './styled-components/NavBar'
import { MeshImageColor } from './styled-components/Images'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <NavBarContainer>
            <Link to='/'><MeshImageColor src='https://i.imgur.com/wObEQfD.png'/></Link>
        </NavBarContainer>
    )
}
export default NavBar