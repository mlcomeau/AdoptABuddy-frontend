export default (state= null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null 
        default:
            return state;
    }
}

// state.currentUser - a user if somebody is logged in 