import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm, createSearch } from '../actions/searchForm.js';
import { fetchSearchResults } from '../actions/searchResults.js';

const Search = ({ searchForm, updateSearchForm, userId, history, createSearch, location, searchRadius, fetchSearchResults }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedForm = {
            ...searchForm,
            [name]: value 
        }
        updateSearchForm(updatedForm)
    }

    const handleSubmit = event => {

        event.preventDefault()

        createSearch({...searchForm, userId}, history)

        fetchSearchResults({...searchForm, location, searchRadius}, history)      
    }


    return (
      <form onSubmit={handleSubmit}>
        <label for="animal">Please Select an Animal: </label>
        <select onChange={handleInputChange} value={searchForm.animal} name="animal" required>
            <option value="" disabled> - </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
        </select>
        <br/>
        <label for="gender">Please Select a Gender: </label>
        <select onChange={handleInputChange} value={searchForm.gender} name="gender" required>
            <option value="" disabled> - </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">Any</option>
        </select>        
        <br/>
        <label for="age">Please Select an Age: </label>
        <select onChange={handleInputChange} value={searchForm.age} name="age" required>
            <option value="" disabled> - </option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
            <option value="any">Any</option>
        </select>          
        <br/>
        <label for="size">Please Select a Size: </label>
        <select onChange={handleInputChange} value={searchForm.size} name="size" required>
            <option value="" disabled> - </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">X-Large</option>
            <option value="any">Any</option>
        </select>  
        <br/>
        <input type="submit" value="Start Search"></input>
      </form>
        
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    const location = state.currentUser ? state.currentUser.zipcode : ""
    const searchRadius = state.currentUser ? state.currentUser.search_radius : ""
    return {
        searchForm: state.searchForm,
        userId,
        location,
        searchRadius
    }
}

export default connect (mapStateToProps, { updateSearchForm, createSearch, fetchSearchResults })(Search)