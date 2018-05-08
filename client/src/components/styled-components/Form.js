import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    background-color: #FDFEFF;
`

export const FormWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 2.5em;
        color: #FF00AB;
        font-family: 'Raleway', sans-serif;
    }
`
export const SignUpFormWrapper = FormWrapper.extend`
    p{
        color: #0085FF;
    }
`
export const FormBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const NewContactFormBody = FormBody.extend`
    background-color: #FF00AB;
    width: 70vw;
    height: 70vh;
    overflow: scroll;
    border: 1px solid #F1F1F1;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`
export const EditContactFormBody = NewContactFormBody.extend`
    background-color: #0085FF;
`
export const FormInput = styled.input`
    width: 300px;
    height: 30px;
    background-color: #F4F3F3;
    border: 0;
    padding: 5px;
    margin: 10px;
    font-size: 1.5em;
    font-family: 'Raleway';
`
export const NewContactInput = FormInput.extend`
    width: 80%;
    margin: 5px;
    border-radius: 2px;
`
export const FormButton = styled.input`
    width: 310px;
    height: 40px;
    background-color: #0085FF;
    font-size: 1.5em;
    font-family: 'Raleway';
    color: white;
    margin: 10px;
    background-image: url('https://i.imgur.com/0rNb597.png');
    background-size: 30px;
    background-position: 25% 50%;
    background-repeat: no-repeat;
`
export const SignUpButton = FormButton.extend`
    background-image: url('https://i.imgur.com/qILBXRj.png');
    background-color: #FF00AB;
`

export const RadioOptions = styled.div`
    justify-content: space-around;
    height: 10vh;
    color: white;
    margin: 10px;
    font-size: 1.25em;
    p {
        color: white;
        font-size: 1em;
        padding: 0;
        margin: 0;
    }
   
`

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    @media only screen and (max-width: 500px){
        height: 90vh;
        width: 100vw;
    }

`

export const UserFormBody = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    width: 60vw;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    background-color: #FF00AB;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    p {
        color: white;
        font-size: 1.5em;
        padding: 0;
    }
    @media only screen and (max-width: 1000px){
    width: 80vw;
    }
    @media only screen and (max-width: 881px){
    width: 85vw;
    }
    @media only screen and (max-width: 850px){
        width: 80%;
    }
    @media only screen and (max-width: 800px){
        width: 95vw;
    }
    @media only screen and (max-width: 500px){
        height: 90vh;
        width: 100vw;
    }
`
export const EditFormBody = UserFormBody.extend`
    background-color: #0085FF;
`
export const InputBoxContainer =styled.div`
    overflow: scroll;
    height: 35vh;
    margin-top: 0;
`
export const FormInputBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    :first-child{
        font-family: 'Raleway', sans-serif;
    }
    @media only screen and (max-width: 500px){
        p{
            margin-left: 10px;
        }
    }
   
`

export const UserFormWrapper = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px auto 0;
    font-family: 'Raleway', sans-serif;
    background-color: #FF00AB;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08); 
`

export const UserFormInput = styled.input`
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 35px;
    margin: 10px;
    font-family: inherit;
    font-size: 1.25em;
    background-color: #FBCAEB;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    transition: border-bottom-color .25s ease-in;
    &:focus {
    border-bottom-color: #f9a825;
    outline: 0;
    }
`
export const EditFormInput = UserFormInput.extend`
    background-color: #B1D9FE;
`
export const UserFormButton = styled.div`
    display: flex;
    justify-content: center;
`

export const RadioInputs = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media only screen and (max-width: 800px){
        flex-direction: column;
        p {
            color: white;
            font-size: .75em;
            padding: 0;
            margin: 0;
        }
    }
`

export const EditSubmitInput = styled.input`
    background-color: rgba(0, 0, 0, 0.0001);
    border: none;
    font-size: 1em;
    width: 150px;
    height: 50px;
    color: white;
    margin: 10px;
`

export const EditButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    height: 50px;
    margin-left: 10px;
`
export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    a{
        text-decoration: none;
        color: white;
    }
`
export const PassWordMaskDiv = styled.div`
    width: 300px;
    height: 30px;
    background-color: #F4F3F3;
    border: 0;
    padding: 5px;
    margin: 10px;
    font-size: 1.5em;
    font-family: 'Raleway';

`