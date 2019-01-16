import React, { Component } from 'react'
import '../App.css';
import moment from 'moment';

const date = new Date();

class MonthlyTotal extends Component {
  
  renderMonthlyTotal = (monthIndex) => {
    let year = moment(date).subtract(monthIndex,'months').startOf('month').format('L').split("/")[2]
    let month = moment(date).subtract(monthIndex,'months').startOf('month').format('L').split("/")[0]
    let monthText = moment(date).subtract(monthIndex,'months').startOf('month').format('LL').split(" ")[0]
    let filteredTransaction = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === year && transaction.date.split("-")[1] === month )
    console.log("inside monthly total", filteredTransaction)
    let MonthlyTotal = 0
    filteredTransaction.map(transaction => (
     MonthlyTotal += transaction.amount
    ))
    return <div>{monthText}-{year} ${MonthlyTotal.toFixed(2)} </div>

  }
    

  render() {
    //console.log(moment(date).subtract(1,'months').startOf('month').format('LL')) 
    //debugger
    return (
      <div>
        <h4>Monthly Total Expense </h4>
       {this.props.transactions.length > 0 ? 
       <div>{this.renderMonthlyTotal(0)}
       {this.renderMonthlyTotal(1)} 
       {this.renderMonthlyTotal(2)} 
       {this.renderMonthlyTotal(3)}  
       </div> 
       : null }
       <hr></hr>
      </div> 
    )
  }
}
export default MonthlyTotal