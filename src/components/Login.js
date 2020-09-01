import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js'

const Login = ({ loginForm, updateLoginForm, login }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedForm = {
            ...loginForm,
            [name]: value 
        }
        updateLoginForm(updatedForm)
    }
    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={loginForm.username} placeholder="email" onChange={handleInputChange}/>
            <input type="password" name="password" value={loginForm.password} placeholder="password" onChange={handleInputChange}/>
            <input type="submit" value="Login"/>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }

    
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)