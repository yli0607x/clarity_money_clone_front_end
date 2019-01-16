import React, { Component } from 'react'
import '../App.css';


class HowItWorks extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside HowItWorks", this.props.transactions)
    
    return (
      <div >
       <h4>How It Works</h4>
       We deliver insights that can help you take control of your finance.
       <br></br>
       We do this by analyzing your spending patterns.
       <hr></hr>
      </div> 
    )
  }
}

export default HowItWorks