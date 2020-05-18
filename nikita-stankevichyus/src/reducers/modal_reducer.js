import { TO_LOG_IN } from '../actions_types/actions_types.js';
import { TO_SIGN_UP } from '../actions_types/actions_types.js';
import { TO_ADD_SERVICE } from '../actions_types/actions_types.js';
import { OUT_MODALS } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export function reducerModals(state = defaultState.modals, action) {

  switch (action.type) {

    case TO_LOG_IN:{
      return {...defaultState.modals, logIn: true, fadeOn: true};
    }

    case TO_SIGN_UP: {
      return {...defaultState.modals, signUp: true, fadeOn: true};
    }

    case TO_ADD_SERVICE: {
      return {...defaultState.modals, addService: true, fadeOn: true, bufferService: action.name};
    }

    case OUT_MODALS: {
      return defaultState.modals;
    }

    default: {
      return defaultState.modals;
    }
    
  }


}