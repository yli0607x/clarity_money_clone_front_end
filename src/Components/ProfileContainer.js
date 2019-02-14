import React, { Component } from 'react'
import '../App.css';
import { connect } from "react-redux";
import { fetchTransactions } from '../actions/action'
import { logOut } from '../actions/userActions'
import { clearTransaction } from '../actions/userActions'
import Button from '@material-ui/core/Button';
import { withRouter} from "react-router";
import ShowProfile from './ShowProfile'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ShowTransactions from './ShowTransactions'

const styles = theme => ({
  bigAvatar: {
    margin: 70,
    width: 170,
    height: 170,
  },
  h3: {
    color: 'white', 
    textAlign: 'center',
  },
});


class ProfileContainer extends Component {
 

  handleClick = () => {
    this.props.history.push('/')
    this.props.logOut()
    this.props.clearTransaction()
  }
  

  render() {
      console.log("inside Profile container", this.props.transactions)
      //console.log("inside profile- state transactions", this.props.transactions)
      const { classes } = this.props;
    return (
      <div >
        <Avatar alt="your head goes here" src={this.props.user.user.avatar} className={classes.bigAvatar} />
        <h3 className={classes.h3}  >Hello {this.props.user.user.firstname}!</h3>
        <hr></hr>
        <ShowTransactions transactions={this.props.transactions} nochange={this.props.transactions} />
        <ShowProfile user={this.props.user.user} />
        <Button variant="contained" style={{marginTop:"40vh", marginLeft: "1vh"}}onClick={this.handleClick}> Logout</Button>
      </div> 
    )
  }
}

ProfileContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  //console.log("inside profile", dispatch)
  
  return{
    fetchTransactions:(public_token, metadata)=> dispatch(fetchTransactions(public_token, metadata)),
    logOut: () => dispatch(logOut()),
    clearTransaction: () => dispatch(clearTransaction())
  }
}

const mapStateToProps = (state) => {
  //console.log("inside profile container", state)
  return{
    user: state.user,
    transactions: state.transactions
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProfileContainer)))
