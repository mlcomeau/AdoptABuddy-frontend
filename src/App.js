import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'

//import components for routes
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import ResultsContainer from './components/ResultsContainer.js';
import Navbar from './components/Navbar.js';

import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  //dispatches action to change state.currentUser upon mount 
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="app">
      { loggedIn ? <Navbar /> : null }
      <Switch>
        <Route exact path="/" render={(props) => loggedIn ? <Home {...props}/> : <Login {...props}/>}/>
        <Route exact path="/signup" render={({history}) => <Signup history={ history }/>}/>
        <Route exact path="/results" component={ResultsContainer}/>
      </Switch>
      </div>
    )
  }

}

//uses state.currentUser to determine if somebody is logged in 
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));


