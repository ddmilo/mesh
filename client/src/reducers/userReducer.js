function userReducer(state = [
    {
      username: 'Nina',
      id: '1'
    }
  ], action) {
    switch (action.type) {

        case 'LOGIN_USER':
        return [...action.currentUser, ...action.loggedIn]

      default:
        return state
    }
  }

  
  export default userReducer