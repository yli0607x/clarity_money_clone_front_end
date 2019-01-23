import React, { Component } from 'react'
import '../App.css';


class OneWeekExpense extends Component {

  
  renderOneWeekTotal = (expenseList) => {
    let weeklyTotal = 0
    expenseList.forEach(oneExpense => (
      weeklyTotal += oneExpense.amount
    ))
    return "$" + (weeklyTotal).toFixed(2)
  }
 
  render() {
    //  console.log("inside OneWeekExpense", this.props.transactions.slice(0, 5))
   //console.log(this.props.oneWeek)
    return (
      <div className="oneweekexpense">
       <h4>OneWeekExpense</h4>
       {this.renderOneWeekTotal(this.props.oneWeek)}
       
      </div> 
    )
  }
}

export default OneWeekExpense