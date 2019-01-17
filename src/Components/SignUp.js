import React from 'react'
import { SignUpUser } from "../actions/userActions";
import { connect } from 'react-redux'
import { Button, Form, Grid, Header, Image, Segment, Checkbox } from 'semantic-ui-react'
import { Redirect } from "react-router";

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    firstname: '',
    lastname: '',
    email:'',
    signedUp: false, 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.passwordConfirmation){
      alert(`password don't match, try again`)
    } else{
      this.setState({ signedUp: true })
      this.props.SignUpUser(this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email )
    }
  }

  renderSignUpForm = () => {
    return <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 101%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
        <Segment stacked>
        <Image src='./images/login-logo.png' width='200px' verticalAlign='middle'/> 
        <Header as='h1' color='grey' textAlign='center'>
        Sign Up
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
        <Form.Group >
        <Form.Input  width={8} name="firstname" value={this.state.firstname} type="text" placeholder="First Name" onChange={this.handleChange} />
        <Form.Input  width={8} name="lastname" value={this.state.lastname} type="text" placeholder="Last Name" onChange={this.handleChange} />
        </Form.Group>
        <Form.Input  name="email" value={this.state.email} type="text" placeholder="Email" onChange={this.handleChange} />
        <Form.Input  name="username" value={this.state.username} type="text" placeholder="Username" onChange={this.handleChange} />
        <Form.Input  name="password" value={this.state.password} type="password" placeholder="Password" onChange={this.handleChange}/>
        <Form.Input  name="passwordConfirmation" value={this.state.passwordConfirmation} type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
        <Form.Field control={Checkbox} label={{ children: 'I agree to the Terms and Conditions' }} />
        <Button fluid size='large'>
              SignUp
        </Button>
        </Form> 
        Already have an account? <a href='/login'>Login</a>
        </Segment>
        </Grid.Column>
    </Grid>   
    </div>
    
  }

  render(){
    //console.log("sign-up", this.state.username)
    return this.state.signedUp ? <Redirect to="/login" /> : <div>{this.renderSignUpForm()}</div>
  }
}

export default connect(null, { SignUpUser })(SignUp)