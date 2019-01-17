import React, { Component } from 'react'
import '../App.css';
import Category from './Category';
import LatestFive from './LatestFive'
import MonthlyTotal from './MonthlyTotal'
import Weather from './Weather'
import CreditCard from './CreditCard'
import Invite from './Invite'
import Mortgage from './Mortgage'
import Retirement from './Retirement'
import HowItWorks from './HowItWorks'
import RecurringExpense from './RecurringExpense'

import { connect } from "react-redux";


class BoxContainer extends Component {



  render() {
    return this.props.transactions.length > 0 ?
      <div >
       <Weather />
       <CreditCard accounts={this.props.accounts}/>
       <LatestFive transactions={this.props.transactions}/>
       <MonthlyTotal transactions={this.props.transactions}/>
       <Category transactions={this.props.transactions}/>
       <RecurringExpense transactions={this.props.transactions}/>
       <Mortgage />
       <Retirement />
       <Invite />
       <HowItWorks />
      </div> :
      <div >
      <Weather />
      <Mortgage />
      <Retirement />
      <Invite />
      <HowItWorks />
      </div>
  }
}

const mapStateToProps = (state) => {
  console.log("inside box transaction present", state.transactions.transactions.length)
  return{
      transactions: state.transactions.transactions,
      accounts: state.transactions.accounts
  }
}


export default connect(mapStateToProps)(BoxContainer)