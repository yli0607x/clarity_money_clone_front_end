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
// import RecurringExpense from './RecurringExpense'
// import Test from './test'
import OneWeekExpense from './OneWeekExpense'
import LinkAccount from './LinkAccount'
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from "react-redux";


class BoxContainer extends Component {

  renderLoader = () => {
    if(this.props.loadingTransactions === true) {
      return <div><CircularProgress /></div>
    } 
  }


 // <div className="section"><RecurringExpense transactions={this.props.transactions}/></div>
  render() {
    console.log("insidebox is it loading", this.props.loadingTransactions)
    return this.props.transactions.length > 0 || this.props.accounts.length > 0 ?
      <div className="main">
       <div className="section"><CreditCard accounts={this.props.accounts}/></div>
       <div className="section"><Category transactions={this.props.transactions}/></div>
       <div className="section"><LatestFive transactions={this.props.transactions}/></div>
       <div className="section"><LinkAccount /></div>
       <div className="section"><OneWeekExpense oneWeek={this.props.oneWeek}/></div>
       <div className="section"><MonthlyTotal transactions={this.props.transactions}/></div>
       <div className="section"><Mortgage /></div>
       <div className="section"><Invite /></div>
       <div className="section"><Weather /></div>
       <div className="section"><Retirement /></div>
       <div className="section"><HowItWorks /></div>
      </div> :
      <div className="main">
      <div className="section"><LinkAccount /></div>
      <div className="section"><HowItWorks /></div>
      <div className="section"><Weather /></div>
      </div> 
  }
}

const mapStateToProps = (state) => {
 console.log("inside box what is state", state)
  return{
      transactions: state.transactions.transactions,
      accounts: state.transactions.accounts,
      oneWeek: state.transactions.oneWeek,
      loadingTransactions: state.transactions.loadingTransactions
  }
}


export default connect(mapStateToProps)(BoxContainer)