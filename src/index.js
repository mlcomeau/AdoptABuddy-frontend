import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

//import reducers 
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import searchForm from './reducers/searchForm.js';
import searchResults from './reducers/searchResults.js';
import searches from './reducers/searches.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loginForm', 'signupForm']
}

const reducer = combineReducers({
  currentUser,
  loginForm: loginForm,
  signupForm: signupForm,
  searchForm,
  searchResults,
  searches,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={ store }>
    <Router>  
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
