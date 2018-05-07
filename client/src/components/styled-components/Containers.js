import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    background-color: #ECEAEA;
`

export const ContactsBodyWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const ContactsWrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    background-color: #ECEAEA;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 800px){
        flex-direction: column;
    }

`
export const ContactsContainer = styled.div`
    background-color: #FDFEFF;
    width: 99vw;
    height: 90vh;
    overflow: scroll;
    margin: 5px;
`
export const ContactContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 1.25em;
`

export const SideBarContainer = styled.div`
    background-color: #FDFEFF;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 29vw;
    height: 90vh;
    overflow: scroll;
    @media only screen and (max-width: 800px){
        flex-direction: row;
        width: 100vw;
        height: 10vh;
        font-size: 1.25em;
    }
`

export const SortButton = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    border-bottom: 2px solid #D8D8D8;
    padding-left: 10px;
    &:hover{
        background-color: #FF00AB;
        color: white;
    }
    @media only screen and (max-width: 800px){
        font-size: 1em;
        background-color: #FF00AB;
        color: white;
    }
    @media only screen and (max-width: 500px){
        font-size: 0.75em;
        border-bottom: none;
    }
`
export const Friend = SortButton.extend`
        background-image: url('https://i.imgur.com/9hwvK1F.png?1');
        &:hover{
            background-image: url('https://i.imgur.com/Vh20eoS.png?1');
            background-size: 200px;
        }
        background-size: 130px;
        background-repeat: no-repeat;
        background-position: center;
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/lzv1ja8.png');
        height: 100%;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
        &:click{
            background-color: #FF00AB;
            // background-size: 30px;
            // background-repeat: no-repeat;
            // background-position: center;
        }
    }
`
export const All = Friend.extend`
    background-image: url('https://i.imgur.com/gE2LgG9.png');
    &:hover{
        background-image: url('https://i.imgur.com/qRpHeQA.png');
        background-size: 200px;
    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/ghIgSXT.png');
        &:hover{
            background-image: url('https://i.imgur.com/ghIgSXT.png');
        }
    }
`
export const Family = Friend.extend`
    background-image: url('https://i.imgur.com/ogeNQvF.png');
    &:hover{
        background-image: url('https://i.imgur.com/BAQWpA3.png?1');
        background-size: 175px;
    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/Yxax28b.png');
        &:hover{
            background-image: url('https://i.imgur.com/Yxax28b.png');
        }
    }
`
export const Date = Friend.extend`
    background-image: url('https://i.imgur.com/fql4gEa.png');
    &:hover{
        background-image: url('https://i.imgur.com/9fGRs38.png');
        background-size: 200px;
    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/nFkkNx4.png');
        &:hover{
            background-image: url('https://i.imgur.com/nFkkNx4.png');
        }
    }
`
export const Class = Friend.extend`
    background-image: url('https://i.imgur.com/fiXl5IE.png');
    &:hover{
        background-image: url('https://i.imgur.com/Yj80zJd.png');
        background-size: 200px;

    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/snUj9lK.png');
        &:hover{
            background-image: url('https://i.imgur.com/snUj9lK.png');
        }
    }
`
export const Job = Friend.extend`
    background-image: url('https://i.imgur.com/hLhgIRL.png');
    &:hover{
        background-image: url('https://i.imgur.com/VUwjOMe.png');
        background-size: 175px;
    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/Xy5vIPx.png');
        &:hover{
            background-image: url('https://i.imgur.com/Xy5vIPx.png');
        }
    }
`
export const Network = Friend.extend`
    background-image: url('https://i.imgur.com/2UCpKaw.png?1');
    &:hover{
        background-image: url('https://i.imgur.com/qHXmDyD.png?1');
        background-size: 200px;
    }
    @media only screen and (max-width: 500px){
        background-image: url('https://i.imgur.com/XBAFu5Z.png');
        &:hover{
            background-image: url('https://i.imgur.com/XBAFu5Z.png');
        }
    }
`


export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
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
    @media only screen and (max-width: 500px;){
        height: 50vh;
    }

`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    @media only screen and (max-width: 500px){
        height: 100vh;
    }
`
export const SplashImageDiv = styled.img `
    width: 100vw;
    height: 80vh;
    background: url("https://i.imgur.com/ozYM36S.jpg");
    background-size: cover;
    background-position: bottom; 
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
   
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
    top: 10vh;
    right: 18vw;
    color: white;
    background-image: url('https://i.imgur.com/lzv1ja8.png');
    background-size: 150px;
    background-repeat: no-repeat;
    background-position: 10% 60%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        right: none;
        width: 100vw;
    }
    @media only screen and (max-width: 500px){
        height: 50vh;
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
    left: 18vw;
    color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        left: none;
        width: 100vw;
        background-image: url('https://i.imgur.com/nFkkNx4.png');
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: 80% 25%;
    }
    @media only screen and (max-width: 500px){
        height: 50vh;
        background-image: url('https://i.imgur.com/nFkkNx4.png');
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: 90% 30%;
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
    border-radius: 4px;
    font-size: 1.5em;
    &:hover{
        background-color: white;
        border: 3px solid pink;
        a {
            color: pink;
        }
    }
    a {
        text-decoration: none;
        color: white;
    }
    
`
export const LeftButton = Button.extend`
    &:hover{
        background-color: white;
        border: 3px solid #62B4FF;
        a {
            color: #62B4FF;
        }
    }
`

export const ContactName = styled.div`
    width: 150px;
`
export const FooterContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    background-color: #FDFEFF;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.001);
    bottom: 50px;
	right: 50px;
`

export const IconsContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    @media only screen and (max-width: 500px){
        flex-direction: column;
        justify-content: flex-end;
    }
`
export const ContactInfoContainer = IconsContainer.extend`
    @media only screen and (max-width: 500px){
        flex-direction: column;
        p {
            width: 200px;
            padding: 0;
        }
    }
`

export const RequestContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const SocialContainer = RequestContainer.extend`

`
export const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 105px;
    @media only screen and (max-width: 500px){
        width: 90px;
        
    }
`