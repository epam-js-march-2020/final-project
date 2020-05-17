import { LOG_IN } from '../actions_types/actions_types.js';
import { SIGN_UP } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export const reducerAuth = (state = defaultState.user, action) => {
  switch(action.type) {
    
    case LOG_IN: {
      return {
        loged: true,
        name: action.name,
        secondName: action.secondName,
        email: action.email,
        services: action.services,
      }
    };
    
    case SIGN_UP: return state;
    
    default:  return state;
    
  }
}