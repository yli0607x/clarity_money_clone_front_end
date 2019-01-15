import React from 'react';
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { LoginUser } from "../actions/userActions";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignUp extends React.Component {

//   state={
//     username: "", 
//     password: ""
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.name]: event.target.value})
//   }

//   handleLoginSubmit = (e) => { 
//     e.preventDefault()
//     this.props.LoginUser(this.state.username, this.state.password)
//     this.setState({ username: "", password: "" });
//   }

  renderSignUpForm = () => {
    return <div className='login-form'>Welcome to Signup</div>
  }


    render() {
    //console.log("inside login", this.state.user)
    //console.log("login- loggedIn", this.props.isLogggedIn)
    //return this.props.isLoggedIn ? <Redirect to="/main" /> : this.renderLoginForm()
    return (
      <div >
       <h4>SignUp</h4>
       {this.renderSignUpForm()}
       <hr></hr>
      </div> 
    )
  }

// const mapStateToProps = ({ userReducer: { authenticatingUser, failedLogin, loggedIn, error}}) => ({
//   authenticatingUser,
//   failedLogin,
//   error,
//   loggedIn
// })

// const mapStateToProps = (state) => {
//   console.log("inside login", state)
//   return{
//       authenticatingUser: state.user.authenticatingUser,
//       failedLogin: state.user.failedLogin,
//       isLoggedIn: state.user.isLoggedIn,
//       error: state.user.error
//   }
// }

//export default withRouter(connect(mapStateToProps, { LoginUser })(Login))
}
export default SignUp