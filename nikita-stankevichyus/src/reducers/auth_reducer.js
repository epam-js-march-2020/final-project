import { LOG_IN } from '../actions_types/actions_types.js';
import { SIGN_UP } from '../actions_types/actions_types.js';
import { ADD_SERVICE } from '../actions_types/actions_types.js';
import { DELETE_SERVICE } from '../actions_types/actions_types.js';


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
    
    case ADD_SERVICE: {

      const service = {
        name: action.serviceName,
        date: action.serviceDate,
      }

      const newState = Object.assign({}, state);
      newState.services = newState.services.concat(service);
      
      return newState;
      
    }

    case DELETE_SERVICE: {

      const newState = Object.assign({}, state);
      newState.services.splice(action.index, 1);
      
      return newState;
    }

    default:  return state;
    
  }
}