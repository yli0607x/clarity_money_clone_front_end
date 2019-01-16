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

import { connect } from "react-redux";


class BoxContainer extends Component {



  render() {
      
    return (
      <div >
       <Weather />
       <CreditCard accounts={this.props.accounts}/>
       <LatestFive transactions={this.props.transactions}/>
       <MonthlyTotal transactions={this.props.transactions}/>
       <Category transactions={this.props.transactions}/>
       <Invite />
       <Mortgage />
       <Retirement />
       <HowItWorks />
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside box state", state)
  return{
      transactions: state.transactions.transactions,
      accounts: state.transactions.accounts
  }
}


export default connect(mapStateToProps)(BoxContainer)