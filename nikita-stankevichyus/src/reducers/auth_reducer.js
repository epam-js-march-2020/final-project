import { LOG_IN, LOG_OUT } from '../actions_types/actions_types.js';
import { SIGN_UP } from '../actions_types/actions_types.js';
import { ADD_SERVICE, ADD_GUEST_SERVICE } from '../actions_types/actions_types.js';
import { DELETE_SERVICE } from '../actions_types/actions_types.js';
import { CHANGE_NAME, CHANGE_SECOND_NAME, CHANGE_EMAIL } from '../actions_types/actions_types.js'


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

    case LOG_OUT: {
      return defaultState.user;
    }
    
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

    case ADD_GUEST_SERVICE: {

      const service = {
        name: action.serviceName,
        date: action.serviceDate,
      }

      const newState = Object.assign({}, state);
      if (newState.guests[action.number]) {
        newState.guests[action.number].services ? 
          newState.guests[action.number].services.push(service)
        : newState.guests[action.number].services = [service];
      }

    }

    case DELETE_SERVICE: {

      const newState = Object.assign({}, state);
      newState.services.splice(action.index, 1);
      
      return newState;
    }

    case CHANGE_NAME: {
      return {...state, name: action.name}
    }

    case CHANGE_SECOND_NAME: {
      return {...state, secondName: action.secondName}
    }

    case CHANGE_EMAIL: {
      return {...state, email: action.email}
    }

    default:  return state;
    
  }
}