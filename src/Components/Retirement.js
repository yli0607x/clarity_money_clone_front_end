import React, { Component } from 'react'
import '../App.css';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

class Retirement extends Component {

  state={
    ageNow: "",
    ageLater: "",
    incomeNow: "",
    incomeLater: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (e) => { 
    e.preventDefault()
  }

  renderRetirementForm = () => {
    return <div className='retirement-form'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Segment stacked>
        <Form size='small'>
          <Form.Group >
            <Form.Input  width={8} iconPosition='left' value={this.state.ageNow} name="ageNow" type="number" placeholder="Age Now" onChange={this.handleChange}/>
            <Form.Input  width={8} iconPosition='left' value={this.state.ageLater} name="ageLater" type="number" placeholder="Retire Age" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Input  width={8} icon='money bill alternate' iconPosition='left' value={this.state.incomeNow} name="incomeNow" type="number" placeholder="Annual Income Now" onChange={this.handleChange}/>
            <Form.Input  width={8} icon='money bill alternate' iconPosition='left' value={this.state.incomeLater} name="incomeLater" type="number" placeholder="Expected Income" onChange={this.handleChange}/>
          </Form.Group>
          <Button fluid size='small'>
            See my retirement plan
          </Button>
        </Form>  
      </Segment>       
    </Grid.Column>    
    </div>
  }

  //data.filter(transaction => transaction.date.split("-")[0]==="2018" && transaction.date.split("-")[1]==="09")
  render() {
     
     //console.log("inside Retirement", this.props.transactions)
    //input: age now, age retire(default 67), income now, target salary after retire(default 70%-90%)
    return (
      <div >
       <h4>Retirement</h4>
      {this.renderRetirementForm()}
       <hr></hr>
      </div> 
    )
  }
}

export default Retirement