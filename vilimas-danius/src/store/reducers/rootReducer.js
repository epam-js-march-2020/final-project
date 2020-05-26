import authReducer from './authReducer';
import accountReducer from './accountReducer';
import bookReducer from './bookReducer';
import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  bookingModal: bookReducer,
  users: usersReducer,
});

export default rootReducer;
