import React, { Component } from 'react'
import '../App.css';
import PlaidLink from 'react-plaid-link'
import { connect } from "react-redux";
import { fetchTransactions } from '../actions/action'
import Button from '@material-ui/core/Button';

class LinkAccount extends Component {
 
   
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

  render() {
      //console.log("inside Profile container", this.props.Profile)
      //console.log("inside profile- state transactions", this.props.transactions)
    return (
      <div className="linkaccount">
        <h4>Connect Your Accounts</h4>
        <hr></hr>
        <img style={{margin:'10'}}src={'https://static.claritymoney.com/images/insights/connect_account.png'} alt="Connet Your Bank Accounts" className="bankimg"/>
        <p>Link your bank account now! We offer insights that help you better manage your finances.</p>
       <PlaidLink
        clientName="Clarity Money"
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
     
      </div> 
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  //console.log("inside profile", dispatch)
  
  return{
    fetchTransactions:(public_token, metadata)=> dispatch(fetchTransactions(public_token, metadata)),
  }
}



export default connect(null, mapDispatchToProps)(LinkAccount)
