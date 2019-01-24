import React, { Component, Fragment} from 'react'
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '15%',
    marginRight:'15%',
  },

  formControl: {
    margin: theme.spacing.unit,
  },
});

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
    ageNow: "",
    ageRetire: "",
    incomeNow: "",
    incomeLater: "", 
    investmentReturn: 2,
    ageAfterRetire: 80,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  renderMonthlyContribution = (argument) => {
    return this.state.ageNow && this.state.ageRetire && this.state.incomeNow && this.state.incomeLater && this.state.investmentReturn ? 
      <div className="mortgage-result">
        <br></br>
        <h4>Your should save at least {formatter.format(argument)} every month till you are {this.state.ageRetire}. </h4>
      </div> : null
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
    //console.log(this.state.investmentReturn)
    //var sum = apr_list.reduce((a, b) => a + b, 0);
    return (
        <div className="retirement">
            <h4>I want to save for retirement</h4>
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
                    label="Expected Annual Income After Retired"
                    //helperText="during retirement"
                    value={incomeLater}
                    style = {{width: 250}}
                    onChange={this.handleChange('incomeLater')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                 {/* <TextField
                    className={classes.formControl}
                    label="Investment Return"
                    style = {{width: 140}}
                    value={investmentReturn}
                    onChange={this.handleChange('investmentReturn')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: InterestFormatCustom,
                    }}
                /> */}
            </div>
            <img className="houseimg" alt="piggy" src="./images/piggy.png"/>
            <Button id="bluebutton" onClick={this.handleClickOpen} >Check My Retirement Plan</Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
              borderRadius="1rem"
            >
              <DialogTitle id="form-dialog-title">Retirement Calculator</DialogTitle>
              <DialogContent>
                <DialogContentText>
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
                        label="Expected Annual Income After Retired"
                        //helperText="during retirement"
                        value={incomeLater}
                        style = {{width: 160}}
                        onChange={this.handleChange('incomeLater')}
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    {/* <TextField
                        className={classes.formControl}
                        label="Investment Return"
                        style = {{width: 140}}
                        value={investmentReturn}
                        onChange={this.handleChange('investmentReturn')}
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: InterestFormatCustom,
                        }}
                    /> */}
                  </div>
                  <img className="houseimg" alt="piggy" src="./images/piggy.png"/>
                  {this.renderMonthlyContribution(monthlyContribution)}
                </DialogContentText>
              </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
            </Dialog>
      </div> 
    ) 
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormattedInputs);