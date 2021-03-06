import './App.css'
import { createBrowserHistory  } from 'history'
import { Route, BrowserRouter , Link } from 'react-router-dom'
import Login from './components/account/Welcome'
import User from './components/users/User'
import React from 'react'


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      customHistory : createBrowserHistory()
    }
  }

  userConfirmationFunc = (message, callback) => {
    const status = window.confirm(message);
    callback(status);
  }

  render() {
    return(      
        <BrowserRouter 
          history={ this.state.customHistory }
          keyLength= {10} 
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
          </BrowserRouter>
      
    )
  }
}

