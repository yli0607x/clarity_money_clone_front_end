import React, { Component, Fragment} from 'react'
import '../App.css';
import moment from 'moment'
import { Dropdown } from 'semantic-ui-react'


const date = new Date();
let thisMonth = moment(date).subtract(0,'months').startOf('month').format('L')
let oneMonthAgo = moment(date).subtract(1,'months').startOf('month').format('L')
let twoMonthAgo = moment(date).subtract(2,'months').startOf('month').format('L')
let threeMonthAgo = moment(date).subtract(3,'months').startOf('month').format('L')
     

class RecurringExpense extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      today: thisMonth
    }
  } 

  // renderCategory = (dateString) => { 
  //   //console.log("transactionslist", transactionsList)
  //   let year = dateString.split("/")[2]
  //   let month = dateString.split("/")[0]
  //   let transactionsList = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === year && transaction.date.split("-")[1] === month )
  //   console.log(transactionsList)
  //   let categoryObj = {}
  //   transactionsList.forEach(transaction => {
  //     if(categoryObj[transaction.category[0]]){
  //       categoryObj[transaction.category[0]] += transaction.amount
  //     } else {
  //       categoryObj[transaction.category[0]] = transaction.amount
  //     }
  //   })
  //   return Object.keys(categoryObj).map(oneCategory => {
  //     return <div key={oneCategory}>
  //       {oneCategory} -- ${categoryObj[oneCategory].toFixed(2)}
  //     </div>
  //   })
  // } 

//   a = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal"},  { value:"a63a6f77-c637-454e-abf2-dfb9b543af6c", display:"Ryan"}]
// b = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer", $$hashKey:"008"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed", $$hashKey:"009"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi", $$hashKey:"00A"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal", $$hashKey:"00B"}]

// function comparer(otherArray){
//   return function(current){
//     return otherArray.filter(function(other){
//       return other.value == current.value && other.display == current.display
//     }).length == 0;
//   }
// }

// var onlyInA = a.filter(comparer(b));
// var onlyInB = b.filter(comparer(a));

// result = onlyInA.concat(onlyInB);

// console.log(result);

  MonthTrasactions = () => {
    let thisYear = thisMonth.split("/")[2]
    let thisMonthInt = thisMonth.split("/")[0]
    let thisMonthList = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === thisYear && transaction.date.split("-")[1] === thisMonthInt )
    let lastYear = oneMonthAgo.split("/")[2]
    let lastMonth = oneMonthAgo.split("/")[0]
    let lastMonthList = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === lastYear && transaction.date.split("-")[1] === lastMonth )
    //debugger
  
  
  }

  // filterRecurringTransactions = () => {
  //   let thisMonthList = {this.MonthTrasactions(thisMonth)}
  // }


  handleChange = (event, {value}) => {
    this.setState({
      today: moment(date).subtract(parseInt(value),'months').startOf('month').format('L')
    })
  }

  parseDate = (dateString) => {
    return <Fragment> {dateString.split("/")[0]}-{dateString.split("/")[2].split("0")[1]} </Fragment>
  }

  
  render() {
    //console.log("inside category", this.props.transactions)
    // console.log("recurring", this.MonthTrasactions(thisMonth))
    // console.log("recurring last month", this.MonthTrasactions(oneMonthAgo))
    return (
      <div className="recurringexpense" >
       <h4>Recurring Expense</h4>
       {this.parseDate(thisMonth)}
       {this.parseDate(oneMonthAgo)}
       {this.parseDate(twoMonthAgo)}
       {this.parseDate(threeMonthAgo)}
       {this.MonthTrasactions()}
    
      </div> 
    )
  }
}

export default RecurringExpense