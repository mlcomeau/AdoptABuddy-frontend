import React from 'react';
import Login from './Login.js';
import { Link } from 'react-router-dom';

const WelcomeContainer = () => {
    return (
        <div className="welcome">
            <h1>Welcome to AdoptABuddy</h1>
            <Login />
            <p>Not a user yet?</p>
            <Link to="/signup">Signup Now!</Link>

        </div>
    )
}

export default WelcomeContainer 