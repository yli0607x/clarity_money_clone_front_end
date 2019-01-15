import React, { Component } from 'react'
import '../App.css';


class LatestFive extends Component {

  renderOneTransaction = () => {
    return this.props.transactions.slice(0, 5).map(transaction => (
      <div className="one_transaction" key={transaction.transaction_id}>
      {transaction.name}-- ${transaction.amount}--{transaction.date}
      </div>   
    ))
  }


  render() {
    //  console.log("inside LatestFive", this.props.transactions.slice(0, 5))
    //  {this.renderOneTransaction()}
    return (
      <div >
       <h4>Latest Five Transactions</h4>
       {this.renderOneTransaction()}
       <hr></hr>
      </div> 
    )
  }
}

export default LatestFive