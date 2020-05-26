import authReducer from './authReducer';
import accountReducer from './accountReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
});

export default rootReducer;
