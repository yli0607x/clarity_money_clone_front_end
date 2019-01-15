import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ProfileContainer from './ProfileContainer';
import BoxContainer from './BoxContainer';
import PlaidLink from 'react-plaid-link'


class Main extends Component {


  render() {

    
    return (
      <Fragment>
        <div className="profile-container">
          <ProfileContainer />
        </div>
        <div className="box-container">
          <BoxContainer />
        </div>
      </Fragment>
    );
  }
}


export default Main
