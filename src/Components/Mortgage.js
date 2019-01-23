import React, { Component, Fragment} from 'react'
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

const options = [
    { key: '10', label: '10 Years', value: '10' },
    { key: '15', label: '15 Years', value: '15' },
    { key: '20', label: '20 Years', value: '20' },
    { key: '30', label: '30 Years', value: '30' }
]

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

function InterestFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        suffix="%"
      />
    );
  }

InterestFormatCustom.propTypes = {
inputRef: PropTypes.func.isRequired,
onChange: PropTypes.func.isRequired,
};

class FormattedInputs extends React.Component {
  state = {
    price: '',
    downpayment: '',
    interest: '',
    term: '',
    maintenance: '0',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  renderMonthlyPayment = (monthlyPayment, loanAmount, totalInterest, totalPayment) => {
      return this.state.price && this.state.downpayment && this.state.interest && this.state.term && this.state.maintenance ? 
        <div className="mortgage-result">
            Monthly Mortgage Payment: {formatter.format(monthlyPayment)}
            <br></br>
            Loan Amount: {formatter.format(loanAmount)}
            <br></br>
            Total Interest Payment: {formatter.format(totalInterest)}
            <br></br>
            Total Payment: {formatter.format(totalPayment)}
        </div>: <div className="mortgage-result">
            Monthly Mortgage Payment: $0.00
            <br></br>
            Loan Amount: {formatter.format(loanAmount)}
            <br></br>
            Total Interest Payment: $0.00
            <br></br>
            Total Payment: $0.00
        </div>
    }

  render() {
    //console.log(this.state.maintenance)
    const { classes } = this.props;
    const { price , downpayment, interest, term, maintenance } = this.state
    const monthlyPayment = parseInt(this.state.maintenance)+(this.state.price - this.state.downpayment)*(this.state.interest/100/12)*Math.pow(1+(this.state.interest/100/12), (this.state.term*12))/(Math.pow(1+(this.state.interest/100/12), (this.state.term*12))-1)
    const loanAmount = this.state.price - this.state.downpayment
    const totalPayment = monthlyPayment*(this.state.term*12)
    const totalInterest = totalPayment - loanAmount
    return (
        <div className="mortgage">
          <h4>Mortgage</h4>
            <div className={classes.container}>
                <TextField
                    className={classes.formControl}
                    label="Sale Price"
                    value={price}
                    style = {{width: 110}}
                    onChange={this.handleChange('price')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <TextField
                    className={classes.formControl}
                    label="Down Payment"
                    style = {{width: 110}}
                    value={downpayment}
                    onChange={this.handleChange('downpayment')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <TextField
                    className={classes.formControl}
                    label="Interest Rate"
                    style = {{width: 110}}
                    value={interest}
                    onChange={this.handleChange('interest')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: InterestFormatCustom,
                    }}
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Term"
                    style = {{width: 110, height:50}}
                    className={classes.formControl}
                    value={this.state.term}
                    onChange={this.handleChange('term')}
                    margin="normal"
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                >
                    {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    className={classes.formControl}
                    label="Monthly Fee (optional)"
                    value={maintenance}
                    style = {{width: 150}}
                    onChange={this.handleChange('maintenance')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
            </div>
        {this.renderMonthlyPayment(monthlyPayment, loanAmount, totalInterest, totalPayment)}
      </div> 
    ) 
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);