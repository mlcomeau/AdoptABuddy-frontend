export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
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