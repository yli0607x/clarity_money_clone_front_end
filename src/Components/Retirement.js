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
    ageNow: "",
    ageRetire: "",
    incomeNow: "",
    incomeLater: "", 
    investmentReturn: "",
    ageAfterRetire: 95,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  renderMonthlyPayment = (monthlyPayment) => {
      return this.state.price && this.state.downpayment && this.state.interest && this.state.term ? 
        <div className="mortgage-result">
            Monthly Mortgage Payment is: ${monthlyPayment.toFixed(2)} 
        </div>: null
    }
  
  

  render() {
    //console.log(this.state.term)
    const { classes } = this.props;
    const { ageNow , ageRetire, incomeNow, incomeLater, investmentReturn } = this.state;
    let monthlyContribution = 0
    let apr = parseInt(this.state.investmentReturn)/100
    let last_apr = 1
    let apr_list = []
    let i
    let yearToRetire = parseInt(this.state.ageRetire) - parseInt(this.state.ageNow)
    for(i=0;i<yearToRetire;i++){apr += 0.001; last_apr*=(1+apr);apr_list.push(last_apr);}
    let sum = apr_list.reduce((a,b) => a+b, 0)
    let factor = 1/sum
    let yearAfterRetire = this.state.ageAfterRetire - parseInt(this.state.ageRetire)
    monthlyContribution = (factor*parseInt(this.state.incomeLater)*yearAfterRetire/12).toFixed(2)
    console.log(this.state.investmentReturn)
    //var sum = apr_list.reduce((a, b) => a + b, 0);
    return (
        <div className="retirement">
            <h4>Retirement</h4>
            <div className={classes.container}>
                <TextField
                    className={classes.formControl}
                    label="Current Age"
                    value={ageNow}
                    onChange={this.handleChange('ageNow')}
                    id="formatted-numberformat-input"
                />
                 <TextField
                    className={classes.formControl}
                    label="Age at Retirement"
                    value={ageRetire}
                    onChange={this.handleChange('ageRetire')}
                    id="formatted-numberformat-input"
                />
                <TextField
                    className={classes.formControl}
                    label="Current Annual Income"
                    value={incomeNow}
                    onChange={this.handleChange('incomeNow')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <TextField
                    className={classes.formControl}
                    label="Expected Annual Income"
                    //helperText="during retirement"
                    value={incomeLater}
                    style = {{width: 160}}
                    onChange={this.handleChange('incomeLater')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                 <TextField
                    className={classes.formControl}
                    label="Investment Return"
                    style = {{width: 140}}
                    value={investmentReturn}
                    onChange={this.handleChange('investmentReturn')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: InterestFormatCustom,
                    }}
                />
            </div>
            Your minimum monthly contribution should be ${monthlyContribution}
      </div> 
    ) 
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);