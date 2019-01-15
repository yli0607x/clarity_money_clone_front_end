import React, { Component } from 'react'
import '../App.css';


class Invite extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Invite", this.props.transactions)
    
    return (
      <div >
       <h4>Invite</h4>
       Love Clarity Money? 
       Share it with your friends! 
       <hr></hr>
      </div> 
    )
  }
}

export default Invite