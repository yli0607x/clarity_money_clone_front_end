import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';


function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: "1rem",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

class SimpleModal extends React.Component {


  constructor(props) {
    super(props);
    this.state = { 
      open:false,
      firstName: this.props.user.firstname,
      lastName: this.props.user.lastname,
      email:this.props.user.email,
      username: this.props.user.username,
      avatar: this.props.user.avatar
    }
  } 

  handleOpen = () => {
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

  render() {
    const { classes } = this.props;
    const { firstName, lastName, email, username, avatar } = this.state;
    //console.log(this.props.user.avatar)
    return (
      <div className="showprofile">
        <div className="myprofile" onClick={this.handleOpen}>Profile</div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {/* <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            /> */}
            <Avatar alt="your head goes here" src={avatar} className={classes.bigAvatar} />
            <TextField
                className={classes.formControl}
                label="First Name"
                value={firstName}
                id="formatted-numberformat-input"
            />
            <TextField
                className={classes.formControl}
                label="Last Name"
                value={lastName}
                id="formatted-numberformat-input"
            />
            <TextField
                className={classes.formControl}
                label="Email"
                value={email}
                id="formatted-numberformat-input"
            />
            <TextField
                className={classes.formControl}
                label="Username"
                value={username}
                id="formatted-numberformat-input"
            />
            

          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;