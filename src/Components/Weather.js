import React, { Component } from 'react'
import '../App.css';
import moment from 'moment';

//let latitude = navigator.geolocation.getCurrentPosition(position=>(return position.coords.latitude)
//const quote = ["Keep your word impeccable.",]
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
    return <div>
      {time}
      <br></br>
      <img height="30" src={icon_URL} alt="icon"/>
      {this.state.weather.currently.temperature}&deg;
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
       <h4>Weather</h4>
       {this.state.isLoaded ? this.displayWeather() : null }
       
      </div> 
    )
  }
}

export default Weather