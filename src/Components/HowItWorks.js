import React, { Component } from 'react'
import '../App.css';


class HowItWorks extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside HowItWorks", this.props.transactions)
    
    return (
      <div className="howitworks">
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./images/1.png" alt="First slide"/>
            </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/2.png" alt="Second slide"/>
              </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="/images/3.png" alt="Third slide"/>
                </div>
          </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
        </div>
      </div> 
    )
  }
}

export default HowItWorks