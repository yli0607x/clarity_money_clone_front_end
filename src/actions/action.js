import { FETCHING_TRANSACTIONS, FETCHED_TRANSACTIONS } from '../reducers/types.js';

export const fetchTransactions = (public_token, metadata) => {
    
	// takes the token in localStorage and finds out who it belongs to
	return (dispatch) => {
	dispatch({ type: FETCHING_TRANSACTIONS }) //tells the app we are fetching
        fetch("http://localhost:4000/api/v1/get_access_token", {
            method: 'POST',
            headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            public_token: public_token
            })
        }) 
        .then(r => r.json())
        .then((data) => dispatch({ type: FETCHED_TRANSACTIONS, payload: {accounts: data.data.accounts, transactions:data.data.transactions, oneWeek: data.data1.transactions} }))	
	}
}

// fetch("http://localhost:4000/api/v1/get_access_token", {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       public_token: public_token
//     })
//   }) 
//   .then(r => r.json())
//   // .then(console.log)
//   .then(data => {
//     //debugger
//     this.setState({
//       transactions: data.data.transactions, 
//       accounts: data.data.accounts
//     })
//   })