import axios from 'axios'

export function sendContactsToState(contactsFromDatabase) {
  return {type: 'GET_CONTACTS', contactsFromDatabase}
}

export const getContacts = () => {
    return async(dispatch) => {
            const user_id = 2
        try{
        const response = await axios.get(`/api/users/${user_id}/contacts`)
        dispatch(sendContactsToState(response.data))
        }
        catch(error){
        console.log(error)
        }
    }
  }

//dispatch- you are emitting this object out to the reducer
//thunk allows an action creator to handle asynchronous data calls
