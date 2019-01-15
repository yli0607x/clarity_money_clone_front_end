import React, { Component } from 'react'
import '../App.css';
import { Dropdown } from 'semantic-ui-react'

let monthText=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let thisMonth = new Date()

class MonthlyTotal extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      today: thisMonth
    }
  } 
  
  renderMonthlyTotal = () => {
    let filteredTransaction = this.props.transactions.filter(transaction => transaction.date.split("-")[0] == this.state.today.getFullYear() && transaction.date.split("-")[1] == this.state.today.getMonth()+1 )
    let MonthlyTotal = 0
    filteredTransaction.map(transaction => (
     MonthlyTotal += transaction.amount
    ))
    return "$" + MonthlyTotal.toFixed(2)
  }
    
  handleChange = (event) => {
    //console.log(event.target.id)
    //debugger
    let now = new Date()
    now.setMonth(now.getMonth()-parseInt(event.target.id))
    this.setState({
      today: now
    })
  }

  //{text: monthText.slice(this.state.monthIndex-3)[0], value:-3}
  render() {
    console.log(this.state.today)
    //  debugger
     
    return (
      <div>
        <h4>Monthly Total Expense </h4>
        <Dropdown placeholder={"select month"} onChange={this.handleChange} value={this.state.value} selection options={[
          {text: monthText[thisMonth.getMonth()] + thisMonth.getFullYear(), id: 0, key: 0},
          {text: "December", id: 1, key: 1},
          {text: "November", id: 2, key: 2},
          {text: "October", id: 3, key: 3}
        ]}/>
       {this.props.transactions ? this.renderMonthlyTotal() : null }
       <hr></hr>
      </div> 
    )
  }
}
export default MonthlyTotal