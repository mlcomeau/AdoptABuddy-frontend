const initState = {
    animal: "",
    gender: "",
    age: "",
    size: ""
}

export default (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SEARCH_FORM":
            return action.formData
        case "RESET_SEARCH_FORM":
            return initState
        default:
            return state;
    }
}

//state.searchForm - the info inputed in the search form 