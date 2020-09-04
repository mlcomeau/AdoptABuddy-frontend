export const setSearchResults = searchResults => {
    return {
        type: "SET_SEARCH_RESULTS",
        searchResults 
    }
}
export const fetchSearchResults = (searchInfo) => {
    return dispatch => {
        return fetch("http://localhost:3001/search_results", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify(searchInfo)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                console.log(response)
                //^up to here works 
                const searchResults = response.animals 
                dispatch(setSearchResults(searchResults))
            }
        })
        .catch(console.log)
    }
}

/*
-fetchSearchResults: takes in user id user zipcode, user search radius, and search form data 
sends a post request to backend (searches#search_results),
backend uses params to create query string fpr petfinder api request 
frontend receives response containing the matching animals,
those animals are pushed to state.searchResults (array) via getSearchResults
*/