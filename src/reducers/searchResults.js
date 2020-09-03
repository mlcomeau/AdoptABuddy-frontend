const initState = []

export default (state = initState, action) => {
    switch (action.type) {
        case "GET_SEARCH_RESULTS":
            return state.searchResults.concat(action.searchResults)
        case "RESET_SEARCH_RESULTS":
            return initState
        default:
            return state;
    }
}