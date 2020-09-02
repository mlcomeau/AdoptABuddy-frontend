import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';

const Signup = ({ signupForm, updateSignupForm, signup, history }) => {

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
        signup(signupForm, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={signupForm.name} name="name" type="text" onChange={handleInputChange} /><br/>
            <input placeholder="Email" value={signupForm.email} name="email" type="email" onChange={handleInputChange} /><br/>
            <input placeholder="Password" value={signupForm.password} name="password" type="password" onChange={handleInputChange} /><br/>
            <input placeholder="Zip Code" value={signupForm.zipcode} name="zipcode" type="text" onChange={handleInputChange} /><br/>
            <input placeholder="Search Radius" value={signupForm.search_radius} name="search_radius" type="number" max="100" onChange={handleInputChange} /><br/>
            <input type="submit" value="Signup" />
        </form>
    )

}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)