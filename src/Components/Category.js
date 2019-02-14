import React, { Component } from 'react'
import '../App.css';
import moment from 'moment'
import {Doughnut} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';



const date = new Date();
let thisMonth = moment(date).subtract(0,'months').startOf('month').format('LL')
let oneMonthAgo = moment(date).subtract(1,'months').startOf('month').format('LL')
let twoMonthAgo = moment(date).subtract(2,'months').startOf('month').format('LL')
let threeMonthAgo = moment(date).subtract(3,'months').startOf('month').format('LL')
let thisMonthInt = moment(date).subtract(0,'months').startOf('month').format('L')

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    position: "absolute", 
    marginTop: '-40px',
    marginLeft: '250px',
  },
});

     

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      today: thisMonthInt,
      number: 0
    }
  } 

  // renderCategory = (dateString) => { 
  //   //console.log("transactionslist", transactionsList)
    
  //   console.log("inside category what is object", Object.keys(categoryObj))
  //   console.log("inside category transactionslist",Object.values(categoryObj).toFixed(2))
  //   return Object.keys(categoryObj).map(oneCategory => {
  //     return <div key={oneCategory}>
  //       {oneCategory} -- ${categoryObj[oneCategory].toFixed(2)}
  //     </div>
  //   })
  // } 

  handleChange = (event) => {
    this.setState({
      today: moment(date).subtract(parseInt(event.target.value),'months').startOf('month').format('L'),
      number: event.target.value
    })
  }

  
  render() {
    //const { classes } = this.props;
    let year = this.state.today.split("/")[2]
    let month = this.state.today.split("/")[0]
    let transactionsList = this.props.transactions.filter(transaction => transaction.date.split("-")[0] === year && transaction.date.split("-")[1] === month )
    //console.log(transactionsList)
    let categoryObj = {}
    transactionsList.forEach(transaction => {
      if(categoryObj[transaction.category[0]]){
        categoryObj[transaction.category[0]] += transaction.amount
      } else {
        categoryObj[transaction.category[0]] = transaction.amount
      }
    })
    let categoryLabels = Object.keys(categoryObj)
    let categoryAmount = Object.values(categoryObj)
    const data = {
      labels: categoryLabels,
      datasets: [{
        data: categoryAmount,
        backgroundColor: [
          '#fc7d79',
          '#f77f5d',
          '#f48c58',
          '#F2A45C',
          '#f9a052',
          '#ffc677'
          ],
        hoverBackgroundColor: [
          '#ffdca4',
          '#ffdca4',
          '#ffdca4',
          '#ffdca4',
          '#ffdca4',
          '#ffdca4',
          ],
        borderWidth: 0.1  
      }],
      options: { 
        legend: {
            labels: {
                fontColor: "#000000",
            }
        },
      }, 
    }
    console.log("inside category",this.state.today)
//{this.props.transactions.length > 0 ? this.renderCategory(this.state.today) : null }
    return (
      <div className="category">
       <FormControl id="categorydropdown">
          <TextField
            select
            style = {{width: 150, height: 40}}
            value={this.state.number}
            onChange={this.handleChange}
            margin="normal"
          >
            <MenuItem value="0">
              <em>{thisMonth.split(" ")[0]+thisMonth.split(" ")[2]}</em>
            </MenuItem>
            <MenuItem value="1">{oneMonthAgo.split(" ")[0]+oneMonthAgo.split(" ")[2]}</MenuItem>
            <MenuItem value="2">{twoMonthAgo.split(" ")[0]+twoMonthAgo.split(" ")[2]}</MenuItem>
            <MenuItem value="3">{threeMonthAgo.split(" ")[0]+threeMonthAgo.split(" ")[2]}</MenuItem>
            </TextField>
          
        </FormControl>
      <Doughnut data={data} />
      <br></br>
      <br></br>
      </div> 
    )
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);