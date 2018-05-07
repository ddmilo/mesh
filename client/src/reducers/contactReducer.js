
function contactReducer(state = [
    {
      username: 'Nina',
      id: '1'
    }
  ], action) {
    switch (action.type) {

      case 'GET_CONTACTS':
        return [...action.contactsFromDatabase]

      default:
        return state
    }
  }

  
  export default contactReducer