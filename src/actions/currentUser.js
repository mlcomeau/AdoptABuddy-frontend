import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getUserSearches, clearSearches } from './searches.js'
import { resetSearchResults } from './searchResults.js'

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
                dispatch(getUserSearches())
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

/*
-signup: sends user input from signup form to db which creates user record, 
the user is sent back which is used to set state.currentUser,
clears info from state.signupForm and reroutes to root url
-login: sends user input from login form to db to set session,
the user sent back is used to set state.currentUser, 
clears info from state.loginForm,
doesn't need to reroute because Login and Home component are both at root url and display conditionally based on state.currentUser
-getCurrentUser: asks the db if there is a session and which user it belongs to, 
if logged in a user is returned which is used to set state.currentUser,
gets the searches belonging to that user
-logout: clears state.searches, state.searchResults, and state.currentUser,
tells the db to clear the session 
*/

