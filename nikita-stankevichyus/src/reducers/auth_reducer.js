import { 
  LOG_IN, 
  LOG_OUT, 
  SIGN_UP, 
  ADD_SERVICE, 
  ADD_GUEST_SERVICE, 
  DELETE_SERVICE, 
  CHANGE_NAME, 
  CHANGE_SECOND_NAME, 
  CHANGE_EMAIL 
} from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export const reducerAuth = (state = defaultState.user, action) => {
  
  switch(action.type) {
    
    case LOG_IN: {
      
      // Fetching data from DB to app's state
      return {
        loged: true,
        name: action.name,
        secondName: action.secondName,
        email: action.email,
        services: action.services,
      };

    }

    case LOG_OUT: {

      // Returning to the default state
      return defaultState.user;

    }
    
    // Sign up changes nothing in app's state
    case SIGN_UP: return state;
    
    case ADD_SERVICE: {

      const service = {
        name: action.serviceName,
        date: action.serviceDate,
      }

      // Immutably changing state to represent that a service has been added
      const newState = Object.assign({}, state);
      newState.services = newState.services.concat(service);
      
      return newState;
      
    };

    case ADD_GUEST_SERVICE: {

      const service = {
        name: action.serviceName,
        date: action.serviceDate,
      }

      // Same like ADD_SERVICE, but if there are no such guest field yet it has to be initiliazed
      const newState = Object.assign({}, state);
      if (newState.guests[action.number]) {
        newState.guests[action.number].services ? 
          newState.guests[action.number].services.push(service)
        : newState.guests[action.number].services = [service];
      } else {
        newState.guests[action.number] = {
          services: [service]
        }
      }
      return newState;
    }

    case DELETE_SERVICE: {

      // Immutably chaning state to represent that a service has been removed
      const newState = Object.assign({}, state);
      newState.services.splice(action.index, 1);
      
      return newState;
    }

    case CHANGE_NAME: {

      // Immutably changing name in state
      return {...state, name: action.name};

    }

    case CHANGE_SECOND_NAME: {

      // Immutably changing second name in state
      return {...state, secondName: action.secondName}

    }

    case CHANGE_EMAIL: {

      // Immutably chaning email in state
      return {...state, email: action.email}

    }

    default:  return state;
    
  }
}