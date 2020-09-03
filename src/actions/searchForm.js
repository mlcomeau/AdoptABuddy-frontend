export const updateSearchForm = (formData) => {
    return {
        type: "UPDATE_SEARCH_FORM",
        formData
    }
}


export const resetSearchForm = () => {
    return {
        type: "RESET_SEARCH_FORM"
    }
}

export const createSearch = (search, history) => {
    return dispatch => {
        const sendableSearch = {
            search: {
                animal: search.animal,
                gender: search.gender,
                size: search.size, 
                age: search.age,
                user_id: search.userId
            }
        }
        return fetch("http://localhost:3001/searches", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify(sendableSearch)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(resetSearchForm())
                history.push("/")
            }
        })
        .catch(console.log)
        
    }

}