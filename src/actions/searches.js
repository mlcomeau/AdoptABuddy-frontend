export const setUserSearches = searches => {
    return {
        type: "SET_USER_SEARCHES",
        searches
    }
}

export const clearSearches = () => {
    return {
        type: "CLEAR_SEARCHES"
    }
}

export const addSearch = search => {
    return {
        type: "ADD_SEARCH",
        search 
    }
}

export const deleteSearchSuccess = searchId => {
    return {
        type: "DELETE_SEARCH_SUCCESS",
        searchId
    }
}

export const deleteSearch = (searchId) => {
    return dispatch => {
        dispatch(deleteSearchSuccess(searchId))
        return fetch(`http://localhost:3001/searches/${searchId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-type": "application/JSON"
            }
        })
    }
}




export const getUserSearches = () => {
    return dispatch => {
        return fetch("http://localhost:3001/searches", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/JSON"
            }
        })
        .then(r => r.json())
        .then(searches => {
            if (searches.error) {
                alert(searches.error)
            }
            else {
                dispatch(setUserSearches(searches))
            }          

        })
        .catch(console.log)
    }
        
}

/* 
-getUserSearch: gets searches belonging to current user from db,
adds those searches to state.searches (array)
*/