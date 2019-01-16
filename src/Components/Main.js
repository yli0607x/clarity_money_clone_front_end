import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import ProfileContainer from './ProfileContainer';
import BoxContainer from './BoxContainer';
import { connect } from "react-redux";


class Main extends Component {


  render() {

    console.log("inside main", this.props.isLoggedIn)
    return this.props.isLoggedIn === true ? <Fragment>
    <div className="profile-container">
      <ProfileContainer />
    </div>
    <div className="box-container">
      <BoxContainer />
    </div>
  </Fragment> : <Redirect to="/login" />
  }
}

const mapStateToProps = (state) => {
  //console.log("inside box", state)
  return{
      accounts: state.transactions.accounts,
      isLoggedIn: state.user.isLoggedIn,
  }
}


export default connect(mapStateToProps)(Main)
