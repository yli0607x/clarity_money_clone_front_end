import React, { Component } from 'react'
import '../App.css';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

class OneWeekExpense extends Component {

  
  renderOneWeekTotal = (expenseList) => {
    let weeklyTotal = 0
    expenseList.forEach(oneExpense => (
      weeklyTotal += oneExpense.amount
    ))
    return <div>
      <div className="oneweektext">You spent <div className="amount">{formatter.format(weeklyTotal)}</div> the past few days</div>
      <img className="oneweekimg" alt="oops" src="./images/oneweek.png" /> 
      <div className="oneweekminitext">You are on track.</div>
    </div>
    
  }
 
  render() {
    //  console.log("inside OneWeekExpense", this.props.transactions.slice(0, 5))
   //console.log(this.props.oneWeek)
    return (
      <div className="oneweekexpense">
       {this.renderOneWeekTotal(this.props.oneWeek)}
       
      </div> 
    )
  }
}

export default OneWeekExpense