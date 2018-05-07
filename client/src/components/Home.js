import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { HomeContainer, 
         SquaresContainer, 
         RightDiv, 
         LeftDiv, 
         Button,
         LeftButton} from './styled-components/Containers'
import { InfoText } from './styled-components/Text' 

const Home = () => {
        return(
            <HomeContainer>
                <NavBar />
                <SquaresContainer>
                    <RightDiv>
                        <InfoText>Keep in Touch. <br/>Organize Contacts.<br/> Make calls.<br/> Mesh. <br/>Sign Up Today!</InfoText>
                        <Button><Link to="/signup">Sign Up</Link></Button>
                    </RightDiv>
                    <LeftDiv>
                        <InfoText>See Friends. <br/> Make calls. <br/> Send messages. <br/> Welcome back. <br/> Mesh. <br/>Login!</InfoText>
                        <LeftButton><Link to="/login_user">Login</Link></LeftButton>
                    </LeftDiv>
                </SquaresContainer>
            </HomeContainer>
        )
}

export default Home