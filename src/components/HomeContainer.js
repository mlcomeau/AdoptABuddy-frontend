import React from 'react';

//import { Route, Link } from 'react-router-dom';
import Logout from './Logout.js';
import { connect } from 'react-redux';


const HomeContainer = () => {

    return (
        <div>
            <p>This will be where the user lands when they are logged in</p>
            <p>It will contain saved animals, saved searches, and link to make a new search</p>
            <Logout/> 
        </div>
    )



}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(HomeContainer)