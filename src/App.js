import React, { Component } from 'react'
import ProfileContainer from './Components/ProfileContainer';
import BoxContainer from './Components/BoxContainer';
import PlaidLink from 'react-plaid-link';
import plaid from 'plaid';

const API = "http://localhost:4567/transactions"
// const client_id= "5c33a11648339d0011601840"
// const secret= "01086502547dce8daae477c6edc161"
// const public_key = "b1e735eeb3e7304310b6da558410ce"


class App extends Component {

  state={
    transactions: [],
    access_token: ""
  }

  // componentDidMount(){
  //   fetch(API)
  //     .then(r=>r.json())
  //     .then(array=>{
  //       this.setState({
  //         transactions: array
  //       })
  //     })
  // }



  handleOnSuccess(public_token, metadata){
    console.log("success-token", public_token)
    // this.setState({ public_token })
    console.log("success-metadata", metadata)
    fetch("http://localhost:4000/api/v1/get_access_token", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public_token: public_token
      })
    }) 
    .then(console.log)
  }

  fetchTransaction = () => {
    fetch("http://localhost:4000/api/v1/transactions")
    .then(console.log)
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
        publicKey="b1e735eeb3e7304310b6da558410ce"
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
