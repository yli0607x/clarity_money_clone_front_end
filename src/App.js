import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';


import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

class App extends Component {
  // <Route component={NotFound} />
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
