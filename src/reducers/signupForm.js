const initState = {
    name: '',
    email: '',
    password: '',
    zipcode: '',
    search_radius: ''
}

export default (state = initState , action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initState
        default:
            return state 
    }

}

// state.signupForm - user input from signupform 

