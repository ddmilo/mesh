import axios from 'axios'

export function sendContactsToState(contactsFromDatabase) {
  return {type: 'GET_CONTACTS', contactsFromDatabase}
}

export function loginUserInStore(currentUser, loggedIn) {
  return {type: 'LOGIN_USER', currentUser, loggedIn}
}

export const getContacts = (user_id) => {
    return async(dispatch) => {
            
        try{
        const response = await axios.get(`/api/users/${user_id}/contacts`)
        dispatch(sendContactsToState(response.data))
        }
        catch(error){
        console.log(error)
        }
    }
  }

export const loginUser = (username)=>{
  return async(dispatch) => {
  try{
    const response = await axios.get(`/api/users/retrieve/${username}`)
      const loggedIn = true
      dispatch(loginUserInStore(response.data[0], loggedIn))
  }
  catch(error){
    console.log(error)
  }
}
}

//dispatch- you are emitting this object out to the reducer
//thunk allows an action creator to handle asynchronous data calls
