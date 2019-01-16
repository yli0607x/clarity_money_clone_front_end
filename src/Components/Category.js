import React, { Component } from 'react'
import '../App.css';
//import Moment from 'react-moment';
import moment from 'moment'
import { Dropdown } from 'semantic-ui-react'


const date = new Date();
let thisMonth = moment(date).subtract(0,'months').startOf('month').format('LL')
let oneMonthAgo = moment(date).subtract(1,'months').startOf('month').format('LL')
let twoMonthAgo = moment(date).subtract(2,'months').startOf('month').format('LL')
let threeMonthAgo = moment(date).subtract(3,'months').startOf('month').format('LL')
let thisMonthInt = moment(date).subtract(0,'months').startOf('month').format('L')
     

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      today: thisMonthInt
    }
  } 

  renderCategory = (date) => { 
    //console.log("transactionslist", transactionsList)
    let year = date.split("/")[2]
    let month = date.split("/")[0]
    let transactionsList = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === year && transaction.date.split("-")[1] === month )
    console.log(transactionsList)
    let categoryObj = {}
    transactionsList.forEach(transaction => {
      if(categoryObj[transaction.category[0]]){
        categoryObj[transaction.category[0]] += transaction.amount
      } else {
        categoryObj[transaction.category[0]] = transaction.amount
      }
    })
    return Object.keys(categoryObj).map(oneCategory => {
      return <div key={oneCategory}>
        {oneCategory} -- ${categoryObj[oneCategory].toFixed(2)}
      </div>
    })
  } 

  handleChange = (event, {value}) => {
    this.setState({
      today: moment(date).subtract(parseInt(value),'months').startOf('month').format('L')
    })
  }

  
  render() {
    //console.log("inside category", this.props.transactions)
    return (
      <div >
       <h4>Category</h4>
       <Dropdown placeholder={"select month"} onChange={this.handleChange} selection options={[
         {text: thisMonth.split(" ")[0]+thisMonth.split(" ")[2], id: 0, key: 0, value: 0 },
         {text: oneMonthAgo.split(" ")[0]+oneMonthAgo.split(" ")[2], id: 1, key: 1, value: 1},
         {text: twoMonthAgo.split(" ")[0]+twoMonthAgo.split(" ")[2], id: 2, key: 2, value: 2},
         {text: threeMonthAgo.split(" ")[0]+threeMonthAgo.split(" ")[2], id: 3, key: 3, value: 3}
        ]}/>
         {this.props.transactions.length > 0 ? this.renderCategory(this.state.today) : null }
       <hr></hr>
      </div> 
    )
  }
}

export default Category