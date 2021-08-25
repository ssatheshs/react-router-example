import './App.css'
import { createBrowserHistory  } from 'history'
import { Route, HashRouter, Link } from 'react-router-dom'
import Login from './components/account/Welcome'
import User from './components/users/User'
import React from 'react'


export default class HashRouterApp extends React.Component{
  constructor(props){
    super(props)
  }

  history = createBrowserHistory()

  userConfirmationFunc = (message, callback) => {
    const status = window.confirm(message);
    callback(status);
  }

  render() {
    return(
      <HashRouter 
        history={ this.history }
        hashType="hashbang"
        basename="/admin/"
        getUserConfirmation={ this.userConfirmationFunc }
      >
        <div className="container">
          <nav>            
            <Link to="/login">Login</Link>
            <Link to="/user">User</Link>
          </nav>
          <Route
            path="/login"
            component={ Login }
          />
          <Route
            path="/user"
            component = { User }
          />
        </div>
      </HashRouter>
    )
  }
}

