import { LOG_IN } from '../actions_types/actions_types.js';
import { SIGN_UP } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';
// let newState = Object.assign({}, state);
      // newState.loged = true;
      // return newState;

export const reducerAuth = (state = false, action) => {
  switch(action.type) {
    
    case LOG_IN: return true;
    
    case SIGN_UP: return state;
    
    default:  return state;
    
  }
}