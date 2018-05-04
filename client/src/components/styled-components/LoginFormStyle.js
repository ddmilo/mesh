import styled from 'styled-components'


export const GlobalFormInputButton = styled.input`

font-family: inherit;
font-size: 20px;
font-weight: 700;
color: #fff;
background-color: rgba(0,0, 0,  0.01);
border: 0;
cursor: pointer;
transition: all .25s cubic-bezier(.02, .01, .47, 1);
&:hover {
box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
transform: translate(0, -5px);
}
`

export const LoginWrapper = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: url("https://images.unsplash.com/photo-1503676685182-2531a01b5b5c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22aac0d96180d439490d1334cfe01675&auto=format&fit=crop&w=1055&q=80");
background-size: cover;
background-position: bottom; 

background-color: #f9a825;
`


export const UserFormBody = styled.div`
/* display: flex;
flex-direction: column;
justify-content: center; */
height: 70vh;
width: 30vw;
border-radius: 10px;
align-items: center;
padding-right: 10px;
padding-left: 10px;
background-color: rgb(0,0,0);
@media only screen and (max-width: 1000px){
  width: 45vw;
}
@media only screen and (max-width: 800px){
  width: 50vw;
}
@media only screen and (max-width: 600px){
  width: 80%;
}

`

export const UserFormWrapper = styled.div`
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin: 48px auto 0;
font-family: Quicksand, arial, sans-serif;
background-color: #f9a825;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08); 
`

export const UserFormHeader = styled.header`
margin: 90px 0 0 0;
padding-top: 32px;
padding-bottom: 32px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2em;
color: white;
`

export const UserFormInput = styled.input`
display: grid;
justify-content: center;
align-items: center;
padding: 5px;
margin-top: 2px;
width: 100%;
font-family: inherit;
font-size: 14px;
background-color: rgba(0,0,0, .25)
border-top: 0;
border-right: 0;
border-bottom: 1px solid #f9a825;
border-left: 0;
transition: border-bottom-color .25s ease-in;

&:focus {
  border-bottom-color: #f9a825;
  outline: 0;
}
`
export const UserFormButton = styled.div`
display: flex;
justify-content: center;

`

export default {
    UserFormWrapper,
    UserFormBody,
    GlobalFormInputButton,
    LoginWrapper,
    UserFormButton
}