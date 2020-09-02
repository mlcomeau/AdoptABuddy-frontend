import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'

//this is where we import components
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';

import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={(props) => loggedIn ? <Home {...props}/> : <Login {...props}/>}/>
        <Route exact path="/signup" render={({history}) => <Signup history={ history }/>}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));


