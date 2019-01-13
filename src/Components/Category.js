import React, { Component } from 'react'
import '../App.css';


class Category extends Component {


  render() {
      if (this.props.transactions){
     console.log("inside category", this.props.transactions.transactions)
      }
      
    return (
      <div >
       Category
      </div> 
    )
  }
}

export default Category