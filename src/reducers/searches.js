const initState= []

export default (state = initState, action) => {
    switch (action.type) {
        case "SET_USER_SEARCHES":
            return action.searches
        case "ADD_SEARCH":
            return state.concat(action.search)
        case "CLEAR_SEARCHES":
            return initState
        case "DELETE_SEARCH_SUCCESS":
            return state.filter(search => search.id === action.searchId ? false : true ) 
        default:
            return state 
    }
}

//state.searches - array of searches belonging to user 