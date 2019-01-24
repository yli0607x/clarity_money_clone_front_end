import React, { Component } from 'react'
import '../App.css';
import moment from 'moment';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

//let latitude = navigator.geolocation.getCurrentPosition(position=>(return position.coords.latitude)
const quotes = ["Keep your word impeccable.", "Probability is the very guide of life.", "Every step you take, we're here to help!","We love helping you!", "When you can’t find the sunshine, be the sunshine.", "The grass is greener where you water it.", "Attitude is a little thing that makes a big difference.", "Begin anywhere. – John Cage", "If you don’t like the road you’re walking, start paving another one. – Dolly Parton"]
class Weather extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      latitude: "40.7047751", 
      longitude: "-74.013277", 
      weather: [],
      isLoaded: false, 
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 1, maximumAge: 1000 },
    )
    this.fetchWeather()
  }

  displayWeather = () => {
    const icon_URL = "./images/icons/" + this.state.weather.currently.icon + ".svg"
    const date = new Date()
    let time = moment(date).format('LLLL');
    let item = quotes[Math.floor(Math.random()*quotes.length)];
    return <div>
      <img height="30" src={icon_URL} alt="icon"/>
      <div className="temperature">{(this.state.weather.currently.temperature).toFixed(0)}&deg;F</div>
      <div className="quote">Hello {this.props.user.user.firstname},<br></br>{item}</div>
      <div className="time">{time}</div>
    </div>
  }

  fetchWeather = () => {
      fetch(`http://localhost:4000/api/v1/weather?latitude=${this.state.latitude}&longitude=${this.state.longitude}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
        .then(res => res.json())
        .then(weather => {
          this.setState({ 
            weather: weather,
            isLoaded: true, 
          })
        })
	}

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     //console.log("inside weather", this.state.weather)
     
     //console.log("inside weather", this.state.weather)
     //console.log("inside Weather", this.props.transactions)
  
    return (
      <div className="weather">
       {this.state.isLoaded ? this.displayWeather() : <CircularProgress /> }
       
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  //console.log("inside profile container", state)
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Weather)