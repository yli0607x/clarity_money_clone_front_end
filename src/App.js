import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';


import Main from './Components/Main'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

class App extends Component {
  // <Route component={NotFound} />
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
