const initState = {
    email: "",
    password: ""
}

export default (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData
        default:
            return state;
    }
}