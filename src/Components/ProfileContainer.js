import React, { Component } from 'react'
import '../App.css';
import PlaidLink from 'react-plaid-link'
import { connect } from "react-redux";
import { fetchTransactions } from '../actions/action'
import { logOut } from '../actions/userActions'
import { clearTransaction } from '../actions/userActions'
import { Button } from 'semantic-ui-react'
import { withRouter} from "react-router";



class ProfileContainer extends Component {
 
   
  handleOnSuccess = (public_token, metadata) => {
    this.props.fetchTransactions(public_token, metadata)
  }

  handleOnExit(error, metadata) {
    console.log('link: user exited');
    console.log(error, metadata);
  }
  handleOnLoad() {
    console.log('link: loaded');
  }
  handleOnEvent(eventname, metadata) {
    console.log('link: user event', eventname, metadata);
  }

  handleClick = () => {
    this.props.history.push('/login')
    this.props.logOut()
    this.props.clearTransaction()
  }
  

  render() {
      //console.log("inside Profile container", this.props.Profile)
      console.log("inside profile- state transactions", this.props.transactions)
    return (
      <div >
        <h3>Name</h3>
        Firstname: {this.props.user.user.firstname}
        Lastname: {this.props.user.user.lastname}
        <hr></hr>
        <h3>Profile</h3>
        <hr></hr>
        <PlaidLink
        clientName="Plaid Client"
        env="sandbox"
        product={['auth', 'transactions']}
        publicKey="b1e735eeb3e7304310b6da558410ce"
        className="some-class-name"
        apiVersion="v2"
        onSuccess={this.handleOnSuccess}
        onExit={this.handleOnExit}
        onEvent={this.handleOnEvent}
        onLoad={this.handleOnLoad}>
        Link Your Account
      </PlaidLink>
      <hr></hr>
      <Button onClick={this.handleClick} >Logout</Button>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  //console.log("inside profile", dispatch)
  
  return{
    fetchTransactions:(public_token, metadata)=> dispatch(fetchTransactions(public_token, metadata)),
    logOut: () => dispatch(logOut()),
    clearTransaction: () => dispatch(clearTransaction())
  }
}

const mapStateToProps = (state) => {
  //console.log("inside profile container", state)
  return{
    user: state.user,
    transactions: state.transactions
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))
