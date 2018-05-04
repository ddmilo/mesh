import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { HomeContainer, SquaresContainer, RightDiv, LeftDiv, Button } from './styled-components/Containers'
import { InfoText } from './styled-components/Text' 

const Home = () => {
        return(
            <HomeContainer>
                <NavBar />
                <SquaresContainer>
                    <RightDiv>
                        <InfoText>Keep in Touch Organize Contacts Call and Message Never lose a person Mesh. Sign Up Today!</InfoText>
                        <Button><Link to="/signup">Sign Up</Link></Button>
                    </RightDiv>
                    <LeftDiv>
                        <InfoText>See Friends Make calls Send messages Welcome back. Mesh. Login!</InfoText>
                        <Button><Link to="/login_user">Login</Link></Button>
                    </LeftDiv>
                </SquaresContainer>
            </HomeContainer>
        )
}

export default Home