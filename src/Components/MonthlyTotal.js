import React, { Component } from 'react'
import '../App.css';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

const date = new Date();


class MonthlyTotal extends Component {
  
  renderMonthlyTotal = (monthIndex) => {
    let year = moment(date).subtract(monthIndex,'months').startOf('month').format('L').split("/")[2]
    let month = moment(date).subtract(monthIndex,'months').startOf('month').format('L').split("/")[0]
    let filteredTransaction = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === year && transaction.date.split("-")[1] === month )
    //console.log("inside monthly total", filteredTransaction)
    let MonthlyTotal = 0
    filteredTransaction.map(transaction => (
     MonthlyTotal += transaction.amount
    ))
    return <div>{MonthlyTotal.toFixed(2)}</div>

  }

  renderMonths = (monthIndex) => {
    let year = moment(date).subtract(monthIndex,'months').startOf('month').format('L').split("/")[2]
    let monthText = moment(date).subtract(monthIndex,'months').startOf('month').format('LL').split(" ")[0]
    let monthYear = monthText + "-" + year
    return <div>{monthYear}</div>

  }
  render() {
    let i
    let array = []
    let montharray = []
    for(i=0;i<6;i++){array.push(this.renderMonthlyTotal(i).props.children)}
    for(i=0;i<6;i++){montharray.push(this.renderMonths(i).props.children)}
    const data = {
      labels: montharray.reverse(),
      datasets: [
        {
          label:false,
          backgroundColor: 'rgba(88, 140, 218,0.8)',
          hoverBackgroundColor: 'rgba(0, 62, 122,0.8)',
          data: array.reverse()
        }
      ]
    } 
    const options =  {
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      tooltips: {
          callbacks: {
            label: function(tooltipItem) {
                    return tooltipItem.yLabel;
            }
          }
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false},
          display: true,
          gridLines: {
              display:false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false},
          type: "linear",
          display: true,
          position: "left",
        }]
      }
    }    
   
    return (
      <div className="monthlytotal">
        <h4>Monthly Total Spending</h4>
        <Bar
          data={data}
          height={250}
          options={options}
        />
      </div> 
    )
  }
}
export default MonthlyTotal