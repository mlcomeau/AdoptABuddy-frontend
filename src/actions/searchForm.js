import { addSearch } from './searches';

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
                dispatch(addSearch(response))
                history.push("/")
            }
        })
        .catch(console.log)
        
    }

}

/*
-createSearch: sends form data and user id to backend, 
backend creates new search record belonging to user,
backend sends response(search) to frontend,
clear state.searchForm and add new search to state.searches (array of searches belonging to current user)
**NEXT: want to reroute to "/search_results" which will display animals in PetFinder API matching the search query 
*/