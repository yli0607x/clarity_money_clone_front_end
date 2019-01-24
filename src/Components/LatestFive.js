import React, { Component } from 'react'
import '../App.css';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

class LatestFive extends Component {

  renderOneTransaction = () => {
    return this.props.transactions.slice(0, 5).map(transaction => (
      <div className="one_account" key={transaction.transaction_id}>
      <div className="accountname">{transaction.name}</div>
      <div className="accountbalance">{formatter.format(transaction.amount)}</div>
      <hr></hr>
      </div>   
    ))
  }


  render() {
    //  console.log("inside LatestFive", this.props.transactions.slice(0, 5))
    //  {this.renderOneTransaction()}
    return (
      <div className="creditcard" >
       <h4>Latest Transactions</h4>
       <hr></hr>
       {this.renderOneTransaction()}
      </div> 
    )
  }
}

export default LatestFive