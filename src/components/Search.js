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
          <input type="text" value={searchForm.animal} placeholder="Animal Type" onChange={handleInputChange} name="animal"></input><br/>
          <input type="text" value={searchForm.gender} placeholder="Gender" onChange={handleInputChange} name="gender"></input><br/>
          <input type="text" value={searchForm.age} placeholder="Age" onChange={handleInputChange} name="age"></input><br/>
          <input type="text" value={searchForm.size} placeholder="Size" onChange={handleInputChange} name="size"></input><br/>
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