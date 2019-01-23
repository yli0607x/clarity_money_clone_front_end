import React from 'react';
//import Transaction from './Transaction'
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
  },
  table: {
    minWidth: 400,
    
  },
  cell: {
    'font-size': '1.3rem'
  },
  row: {
    'font-size': '1rem'
  }
});

function SimpleTable(props) {
  const { classes } = props;

  return (
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
          {props.transactions.map(row => (
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
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

