import { addSearch } from './searches';
import { resetSearchResults } from './searchResults';

export const updateSearchForm = formData => {
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

export const createSearch = (search) => {   
    return dispatch => {
        dispatch(resetSearchResults())
        const sendableSearch = {
            search: {
                animal: search.animal,
                gender: search.gender,
                size: search.size, 
                age: search.age,
                user_id: search.userId
            }
        }
        return fetch(`${process.env.REACT_APP_ROOT_URL}searches`, {
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
                dispatch(addSearch(response))
            }
        })
        .catch(console.log)
    }
}

/*
-createSearch: sends form data and user id to backend, 
backend creates new search record belonging to user then sends it back,
clear state.searchForm and add new search to state.searches (array of searches belonging to current user)
*/