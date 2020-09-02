import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="login">
            <h1>Welcome to AdoptABuddy</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={loginForm.username} placeholder="email" onChange={handleInputChange}/><br/>
                <input type="password" name="password" value={loginForm.password} placeholder="password" onChange={handleInputChange}/><br/>
                <input type="submit" value="Login"/><br/>
            </form><br/>
            <p>Not a user yet?</p>
            <Link to="/signup">Signup Now!</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }

    
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)