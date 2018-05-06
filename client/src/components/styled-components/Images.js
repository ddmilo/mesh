import styled from 'styled-components'

export const MeshImage = styled.img`
    width: 200px;
    height: 60px;
    @media only screen and (max-width: 500px){
        width: 150px;
        height: 50px;
    }
`
export const ContactImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`
export const SocialImage = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
`

export const MenuImage = SocialImage.extend`
    margin: 10px;
    @media only screen and (max-width: 500px){
        width: 30px;
    }
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

export default { MeshImage,
                 SocialImage,
                 ContactImage,
                 NewContactImage,
                 CrudImage,
                 MenuImage,
                 MenuImageContainer,
                 SearchIcon
                }