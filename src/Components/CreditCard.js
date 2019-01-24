import React, { Component } from 'react'
import '../App.css';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

class CreditCard extends Component {

  renderOneAccount = () => {
    return this.props.accounts.map(account => (
      <div className="one_account" key={account.account_id}>
      <div className="accountname">{account.name}</div>
      <div className="accountbalance">{formatter.format(account.balances.current)} {account.balances.limit ? 'Limit: '+ formatter.format(account.balances.limit) : null}</div>
      <hr></hr>
      </div>   
    ))
  }

  render() {
     //console.log("fidelity! inside credit card", this.props.accounts)
     //console.log("inside CreditCard", this.props.accounts)
    return (
      <div className="creditcard">
       <h4>Accounts</h4>
       <hr></hr>
       {this.renderOneAccount()}
      </div> 
    )
  }
}

export default CreditCard