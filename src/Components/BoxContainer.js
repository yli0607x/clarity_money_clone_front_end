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

import { connect } from "react-redux";


class BoxContainer extends Component {



  render() {
      
    return (
      <div >
       
       <LatestFive transactions={this.props.transactions}/>
       <MonthlyTotal transactions={this.props.transactions}/>
       <Category transactions={this.props.transactions}/>
       <Weather />
       <CreditCard accounts={this.props.accounts}/>
       <Invite />
       <Mortgage />
       <Retirement />
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside box", state)
  return{
      transactions: state.transactions.transactions,
      accounts: state.transactions.accounts
  }
}

export default connect(mapStateToProps)(BoxContainer)