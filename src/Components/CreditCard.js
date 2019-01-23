import React, { Component } from 'react'
import '../App.css';


class CreditCard extends Component {

  renderOneAccount = () => {
    return this.props.accounts.map(account => (
      <div className="one_account" key={account.account_id}>
      {account.name}-- balance: ${account.balances.current} {account.balances.limit ? 'limit: $'+ account.balances.limit : null}
      </div>   
    ))
  }

  render() {
     //console.log("fidelity! inside credit card", this.props.accounts)
     //console.log("inside CreditCard", this.props.accounts)
    return (
      <div className="creditcard">
       <h4>CreditCard</h4>
       {this.renderOneAccount()}
      </div> 
    )
  }
}

export default CreditCard