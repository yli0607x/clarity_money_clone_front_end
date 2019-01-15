import React, { Component } from 'react'
import '../App.css';

//let latitude = navigator.geolocation.getCurrentPosition(position=>(return position.coords.latitude)
class Weather extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Weather", this.props.transactions)
    console.log("inside weather", latitude)
    return (
      <div >
       <h4>Weather</h4>
       <hr></hr>
      </div> 
    )
  }
}

export default Weather