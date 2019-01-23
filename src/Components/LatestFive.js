import React, { Component } from 'react'
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: '4px 4px 4px 4px',
  },
  table: {
    minWidth: 420,
    
  },
  cell: {
    'font-size': '0.9rem'
  },
  row: {
    'font-size': '0.8rem',
    height: '20px'
  }
});


class LatestFive extends Component {

  // renderOneTransaction = () => {
  //   return this.props.transactions.slice(0, 5).map(transaction => (
  //     <div className="one_transaction" key={transaction.transaction_id}>
  //     {transaction.name}-- ${transaction.amount}--{transaction.date}
  //     </div>   
  //   ))
  // }


  render() {
    //  console.log("inside LatestFive", this.props.transactions.slice(0, 5))
    //  {this.renderOneTransaction()}
    const { classes } = this.props;
    return (
      <div className="lastfive">
       <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>Transactions</TableCell>
              <TableCell className={classes.cell} align="right">Date</TableCell>
              <TableCell className={classes.cell} align="right">Category</TableCell>
              <TableCell className={classes.cell} align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.transactions.slice(0,5).map(row => (
              <TableRow key={row.transaction_id}>
                <TableCell className={classes.row} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.row} align="right">{row.date}</TableCell>
                <TableCell className={classes.row} align="right">{row.category[0]}</TableCell>
                <TableCell className={classes.row} align="right">${row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
      </div> 
    )
  }
}

LatestFive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestFive);