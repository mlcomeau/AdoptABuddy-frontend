import React from 'react';
import './App.css';

import WelcomeContainer from './components/WelcomeContainer.js';
import HomeContainer from './components/HomeContainer.js';
import Signup from './components/Signup.js';

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <>
       {this.props.currentUser ? <HomeContainer /> : <WelcomeContainer />}
       <Route exact path="/signup" component={Signup}/>


      </>

    )
  }

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
