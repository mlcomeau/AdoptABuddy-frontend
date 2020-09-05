const initState = []

export default (state = initState, action) => {
    switch (action.type) {
        case "SET_SEARCH_RESULTS":
            return state.concat(action.searchResults)
        case "RESET_SEARCH_RESULTS":
            return initState
        default:
            return state
    }
}

//state.searchResults - array containing results of a search