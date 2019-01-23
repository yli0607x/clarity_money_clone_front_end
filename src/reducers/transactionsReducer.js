import { FETCHING_TRANSACTIONS, FETCHED_TRANSACTIONS, UNFETCH_TRANSACTIONS } from "./types";

const initialState = {
    transactions: [], 
	accounts: [],
	loadingTransactions: false,
	
}

const transactionsReducer = (state = initialState, action) => {
	console.log('%c transactionsReducer', 'color: pink', state, action);
	switch (action.type) {
		case FETCHING_TRANSACTIONS: //tells the app we're fetching
			return { ...state, loadingTransactions: true }
		case FETCHED_TRANSACTIONS:
			return { ...state, loadingTransactions: false, transactions: action.payload.transactions, accounts: action.payload.accounts, oneWeek: action.payload.oneWeek}
		case UNFETCH_TRANSACTIONS: //tells the app we're fetching
			return { ...state, transactions: [], accounts: [] }
		default:
			return state
	}
}
export default transactionsReducer;