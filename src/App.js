import React, { Component } from 'react'
import ProfileContainer from './Components/ProfileContainer';
import BoxContainer from './Components/BoxContainer';
import PlaidLink from 'react-plaid-link';

const API = "http://localhost:4567/transactions"
class App extends Component {

  state={
    transactions: [],
  }

  componentDidMount(){
    fetch(API)
      .then(r=>r.json())
      .then(array=>{
        this.setState({
          transactions: array
        })
      })
  }

  handleOnSuccess(token, metadata){
    console.log("success token", token)
    // this.setState({ token })
    console.log("success metadata", metadata)
    // fetch("http://localhost:3000/api/token", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     public_token: token,
    //     accounts: metadata.accounts,
    //     institution: metadata.institution,
    //     link_session_id: metadata.link_session_id,
    //   })
    // })
  }
  handleOnExit(error, metadata) {
    console.log('link: user exited');
    console.log(error, metadata);
  }
  handleOnLoad() {
    console.log('link: loaded');
  }
  handleOnEvent(eventname, metadata) {
    console.log('link: user event', eventname, metadata);
  }

  render() {
    //console.log(this.state.transactions)
    return (
      <div >
        <PlaidLink
        clientName="Plaid Client"
        env="sandbox"
        product={['auth', 'transactions']}
        publicKey="614be98f819e9bd8d0db9abec1c08a"
        className="some-class-name"
        apiVersion="v2"
        onSuccess={this.handleOnSuccess}
        onExit={this.handleOnExit}
        onEvent={this.handleOnEvent}
        onLoad={this.handleOnLoad}>
        Open Plaid Link button
      </PlaidLink>
        <div className="profile-container">
          <ProfileContainer />
        </div>
        <div className="box-container">
          <BoxContainer transactions={this.state.transactions}/>
        </div>
      </div>
    );
  }
}

export default App
