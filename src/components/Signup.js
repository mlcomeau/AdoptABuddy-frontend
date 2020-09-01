import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
//import { signup } from '../actions/signupForm.js';

const Signup = ({ signupForm, updateSignupForm }) => {
    const handleInputChange = event => {
        const { name, value } = event.target 
        const updatedForm = {
            ...signupForm,
            [name]: value
        }
        updateSignupForm(updatedForm)
    }

    const handleSubmit = event => {
        event.preventDefault()
        //signup(signupForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={signupForm.name} name="name" type="text" onChange={handleInputChange} /><br/>
            <input placeholder="Email" value={signupForm.email} name="email" type="email" onChange={handleInputChange} /><br/>
            <input placeholder="Password" value={signupForm.password} name="password" type="password" onChange={handleInputChange} /><br/>
            <input placeholder="Zip Code" value={signupForm.zipCode} name="zip-code" type="number" size="5" onChange={handleInputChange} /><br/>
            <label for="search-radius">Please select a search radius (miles):</label><br/>
            <select name="search-radius" onChange={handleInputChange}>
                <option value={signupForm.searchRadius}>10</option>
                <option value={signupForm.searchRadius}>25</option>
                <option value={signupForm.searchRadius}>50</option>
                <option value={signupForm.searchRadius}>100</option>
            </select><br/>
            <input type="submit" value="Signup" />
        </form>
    )

}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm })(Signup)