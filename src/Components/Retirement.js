import React, { Component } from 'react'
import '../App.css';


class Retirement extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Retirement", this.props.transactions)
    //input: age now, age retire(default 67), income now, target salary after retire(default 70%-90%)
    return (
      <div >
       <h4>Retirement</h4>
       <hr></hr>
      </div> 
    )
  }
}

export default Retirement