import React, { Component } from 'react'
import '../App.css';


class Category extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside category", this.props.transactions)
    
    return (
      <div >
       <h4>Category</h4>
       <hr></hr>
      </div> 
    )
  }
}

export default Category