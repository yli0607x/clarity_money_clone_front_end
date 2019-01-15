import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
//import itemReducer from './itemReducer';

export default combineReducers({
    user: userReducer,
    transactions: transactionsReducer,
})