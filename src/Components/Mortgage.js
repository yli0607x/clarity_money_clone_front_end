import React, { Component } from 'react'
import '../App.css';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
//import numeral from "numeral";

const options = [
  { key: '10', text: '10 Years', value: '10' },
  { key: '15', text: '15 Years', value: '15' },
  { key: '20', text: '20 Years', value: '20' },
  { key: '30', text: '30 Years', value: '30' }
]

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2
// })

class Mortgage extends Component {

  state={
    price: 1000000,
    downpayment: 300000,
    interest: 0.04,
    term: 30,
    maintenance: ""
  }

  handleChange = (event) => {
    // console.log(formatter)
    //  this.setState({[event.target.name]: event.target.value}, () => {console.log(formatter); debugger})
    this.setState({[event.target.name]: event.target.value})
  }

  // formatNumber = (word) => {
  //   return numeral(word).format('$0.00')
  // }

  handleSubmit = (e) => { 
    e.preventDefault()
  }
 //{(this.state.price - this.state.downpayment)*(this.state.interest/12)*Math.pow(1+(this.state.interest/12), (this.state.term*12))/(Math.pow(1+(this.state.interest/12), (this.state.term*12))-1)}
  renderMortgageForm = () => {
    return <div className='mortgage-form'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Segment stacked>
        <Form size='small'>
          <Form.Group >
            <Form.Input  width={8} icon='dollar sign' iconPosition='left' label='Sale Price' value={this.state.price} name="price" type="number" placeholder="Sale Price" onChange={this.handleChange}/>
            <Form.Input  width={8} icon='dollar sign' iconPosition='left' label='Down Payment' value={this.state.downpayment} name="downpayment" type="number" placeholder="Down Payment " onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Input  width={8} iconPosition='left' label='Interest Rate' value={this.state.incomeNow} name="incomeNow" type="number" placeholder="Annual Income Now" onChange={this.handleChange}/>
            <Form.Select width={8} label='Term' value={this.state.term} options={options} name="term" placeholder='30 Years' onChange={this.handleChange} />
          </Form.Group>
          <Button fluid size='small'>
            Calculate Mortgage
          </Button>
          Monthly Mortgage Payment
          {(this.state.price - this.state.downpayment)*(this.state.interest/12)*Math.pow(1+(this.state.interest/12), (this.state.term*12))/(Math.pow(1+(this.state.interest/12), (this.state.term*12))-1)}
        </Form>  
      </Segment>       
    </Grid.Column>    
    </div>
  }

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Mortgage", this.props.transactions)
    console.log("inside mortgage", this.state.term)
   
    return (
      <div >
       <h4>Mortgage</h4>
       {this.renderMortgageForm()}
       <hr></hr>
      </div> 
    )
  }
}

export default Mortgage