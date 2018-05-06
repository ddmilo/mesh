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
    font-family: 'Raleway';
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
        font-family: 'Raleway';
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
export default { Form, Container, FormWrapper, FormBody, FormInput, FormButton, SignUpButton, SignUpFormWrapper }