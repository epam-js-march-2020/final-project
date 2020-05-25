import { combineReducers } from 'redux';
import serviceRedusers from './serviceReducer';
import userReduser from './userReducer';
import guestsReducer from './guestsReducer'

export default combineReducers({
    user: userReduser,
    service: serviceRedusers,
    guests: guestsReducer
});
