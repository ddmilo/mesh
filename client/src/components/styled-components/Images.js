import styled from 'styled-components'

export const MeshImage = styled.img`
    width: 150px;
    height: 60px;
    margin-right: 10px;
    // @media only screen and (max-width: 500px){
    //     width: 125px;
    //     height: 40px;
    //     margin-right: 0px;
    // }
    @media only screen and (max-width: 500px){
        width: 0px;
        margin: 0;
    }
`

export const MeshImageColor = styled.img`
    width: 200px;
    height: 60px;
    margin-left: 10px;
`
export const ContactImage = styled.img`
    width: 50px;
    height: 50px;
    justify-self: flex-start;
  
`
export const SocialImage = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
   
`

export const MenuImage = SocialImage.extend`
    margin: 10px;
`
export const MenuImageContainer = styled.div`
    border-radius: 100%;
    background-color: #0085FF;
    width: 60px;
    height: 60px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #2697FF;
    }

`
export const NewContactImage = styled.img`
    width: 70px;
    height: 70px;
    margin: 10px;
`
export const CrudImage = styled.img`
    width: 20px;
    height: 20px;
    margin: 10px;
`
export const SearchIcon = CrudImage.extend`

`
export const PersonImage = styled.img`
    width: 30px;
    height: 30px;
`
export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`