import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShowTransactionsList from './ShowTransactionsList'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  formControl: {
    margin: '45px',
    position: 'absolute',
    marginTop: '30px',
    marginLeft: '1050px',
  },
});



class ShowTransactions extends React.Component {


  constructor(props) {
    super(props);
    this.state = { 
      open:false,
      dropdownopen:false,
      term: "",
      scroll: 'paper',
      sortby: "date"
    }
  } 

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleChange = (event) => { 
    this.setState({ term: event.target.value })
  }

  handleSortChange = event => {
    this.setState({ sortby: event.target.value });
  };

  handleDropdownClose = () => {
    this.setState({ dropdownopen: false });
  };

  handleDorpdownOpen = () => {
    this.setState({ dropdownopen: true });
  };

  filteredTransactions = () => {
    function low(a,b) {
      if (a.amount < b.amount)
        return -1;
      if (a.amount > b.amount)
        return 1;
      return 0;
    }
    function high(a,b) {
      if (a.amount < b.amount)
        return 1;
      if (a.amount > b.amount)
        return -1;
      return 0;
    }
    if(this.state.sortby === "date"){
      let filteredList = this.props.nochange.transactions.filter(transaction =>{
      return transaction.name.toLowerCase().includes(this.state.term) || transaction.category[0].toLowerCase().includes(this.state.term) 
      })
      return filteredList 
    } else if(this.state.sortby === "low") {
      let sortedList = this.props.transactions.transactions.sort(low)
      let filteredList = sortedList.filter(transaction =>{
        return transaction.name.toLowerCase().includes(this.state.term) || transaction.category[0].toLowerCase().includes(this.state.term)
        })
        return filteredList 
    } else if(this.state.sortby === "high") {
      let sortedList = this.props.transactions.transactions.sort(high)
      let filteredList = sortedList.filter(transaction =>{
        return transaction.name.toLowerCase().includes(this.state.term) || transaction.category[0].toLowerCase().includes(this.state.term)
        })
        return filteredList 
    } 
  }
  
  render() {
    const { classes } = this.props;
    // const { } = this.state;
    console.log("inside transactions sort by", this.state.sortby)
    console.log("inside showtransaction, what is first transaction", this.props.transactions.transactions[0])
    return (
      <div>
        <h3 style={{color:"white"}} onClick={this.handleClickOpen('paper')}>Transactions</h3>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          maxWidth="lg"
          fullWidth= {true}
          borderRadius="1rem"
        >
        <DialogTitle id="scroll-dialog-title">Transactions</DialogTitle>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={this.handleChange}
              value={this.state.term}     
              placeholder="Search By Merchant or Category"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <FormControl className={classes.formControl}>
          <TextField
            select
            label="Sort By"
            style = {{width: 150, height: 100}}
            value={this.state.sortby}
            onChange={this.handleSortChange}
            margin="normal"
          >
              <MenuItem value="date">
                <em>Date</em>
              </MenuItem>
              <MenuItem value={"low"}>Low to High</MenuItem>
              <MenuItem value={"high"}>High to Low</MenuItem>
            </TextField>
          
        </FormControl>
          <DialogContent>
            <DialogContentText>
              <ShowTransactionsList transactions={this.filteredTransactions()} />
            </DialogContentText>
        </DialogContent>  
        <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
        </DialogActions>  
        </Dialog>  
    </div>
    );
  }
}


ShowTransactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowTransactions);