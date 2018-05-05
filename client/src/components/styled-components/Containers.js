import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway';
    background-color: #ECEAEA;
`
export const ContactsWrapper = Container.extend`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
`
export const ContactsContainer = styled.div`
    background-color: #FDFEFF;
    width: 99vw;
    height: 90vh;
    overflow: scroll;
`
export const ContactContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Raleway';
`

export const SideBarContainer = styled.div`
    background-color: #FDFEFF;
    width: 29vw;
    height: 98vh;
    overflow: scroll;
`

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
`
export const SquaresContainer = styled.div `
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1199px){
        position: static;
    }
    @media only screen and (max-width: 500px){
        height: 150vh;
    }
`
export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    width: 70vh;
    height: 50vh;
    z-index: 4;
    background: #FF00AB;
    top: 35vh;
    right: 20vw;
    color: white;
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        right: none;
        width: 100vw;
    }
`
  
export const LeftDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    width: 70vh;
    height: 50vh;
    z-index: 3;
    background: #0085FF;
    top: 20vh;
    left: 10vw;
    color: white;
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        left: none;
        width: 100vw;
    }
    @media only screen and (max-width: 500px){
        height: 50vh;
    }
`
export const Button = styled.div`
    width: 150px;
    height: 50px;
    border: 3px solid white;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: white;
    }
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const ContactName = styled.div`
    width: 150px;
`
export const FooterContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    background-color: #FDFEFF;

`
export default { Container, 
                 ContactContainer, 
                 ContactsContainer, 
                 SideBarContainer,
                 ContactsWrapper,
                 ContactInfo,
                 SquaresContainer,
                 RightDiv,
                 LeftDiv,
                 Button,
                 HomeContainer,
                 ContactName,
                 FooterContainer }