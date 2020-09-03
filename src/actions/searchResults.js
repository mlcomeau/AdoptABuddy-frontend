export const getSearchResults = () => {
    return {
        type: "GET_SEARCH_RESULTS"
    }
}

export const fetchSearchResults = (query, userId) => {
    return dispatch => {
        const searchInfo = {
            query, 
            userId
        }
        return fetch("http://localhost:3001/search_results", {
            credentials: "include",
            method: "GET",
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
                getSearchResults(response)
            }
        })
    }
}