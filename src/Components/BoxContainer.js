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
import Test from './test'
import OneWeekExpense from './OneWeekExpense'
import LinkAccount from './LinkAccount'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { connect } from "react-redux";


class BoxContainer extends Component {

  renderLoader = () => {
    if(this.props.loadingTransactions === true) {
      return <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
    } 
  }


 // <div className="section"><RecurringExpense transactions={this.props.transactions}/></div>
  render() {
    return this.props.transactions.length > 0 || this.props.accounts.length > 0 ?
      <div className="main">
       {this.renderLoader()}
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
      loadingTransactions: state.loadingTransactions
  }
}


export default connect(mapStateToProps)(BoxContainer)