import React from 'react'
import Login from './Welcome'
import Register from './Register'
import ForgotPassword from '../auth/ForgotPassword'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PageNotFound from '../errors/PageNotFound'

const Account = () => {

    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-8 offset-sm-2 mt-5">
                <div className="card m-3">
                    <Switch>
                        
                        <Route path={'/register'} component={Register}  />
                        <Route path={'/forgotPassword'} component={ForgotPassword} />
                        <Route path="/error" component={ PageNotFound } />
                        <Route path={'/'} component={Login} />
                    </Switch>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Account