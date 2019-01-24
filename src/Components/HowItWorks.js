import React, { Component } from 'react'
import '../App.css';


class HowItWorks extends Component {

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside HowItWorks", this.props.transactions)
    
    return (
      <div className="howitworks">
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="./images/1.png" alt="First slide"/>
            </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="./images/2.png" alt="Second slide"/>
              </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/images/3.png" alt="Third slide"/>
                </div>
          </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
        </div>
      </div> 
    )
  }
}

export default HowItWorks