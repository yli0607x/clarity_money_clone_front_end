import React, { Component } from 'react'
import '../App.css';
import Category from './Category';


class BoxContainer extends Component {



  render() {
    console.log("insidebox", this.props.transactions)
    

      
    return (
      <div >
       Box Container
       <Category transactions={this.props.transactions}/>
      </div> 
    )
  }
}

export default BoxContainer