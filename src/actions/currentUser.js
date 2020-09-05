import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getUserSearches } from './searches.js'
import { resetSearchResults } from './searchResults.js'
import { clearSearches } from './searches.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const signup = (creds, history) => {
    return dispatch => {
        const userInfo = {
            user: creds 
        }
        return fetch("http://localhost:3001/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                dispatch(setCurrentUser(response))
                dispatch(resetSignupForm())
                history.push('/')
            }          

        })
        .catch(console.log)
    }
}

export const login = creds => {
    return dispatch => {
        return fetch("http://localhost:3001/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify(creds)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }
            else {
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
            }          

        })
        .catch(console.log)
    }
}


export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/JSON"
            }
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }
            else {
                dispatch(setCurrentUser(user))
                dispatch(getUserSearches())
            }          

        })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearSearches())
        dispatch(resetSearchResults())
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}

