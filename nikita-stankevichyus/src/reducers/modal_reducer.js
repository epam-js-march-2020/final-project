import { TO_LOG_IN } from '../actions_types/actions_types.js';
import { TO_SIGN_UP } from '../actions_types/actions_types.js';
import { TO_ADD_SERVICE } from '../actions_types/actions_types.js';
import { TO_CHANGE_NAME } from '../actions_types/actions_types.js';
import { TO_CHANGE_SECOND_NAME } from '../actions_types/actions_types.js'
import { TO_CHANGE_EMAIL } from '../actions_types/actions_types.js'
import { OUT_MODALS } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export function reducerModals(state = defaultState.modals, action) {

  /*
   * If corresponding to modal window parameter is true the window is shown
   * fadeOn corresponds to fade "behind" the modal window during interaction
   * bufferService is field containing service that is being added -- to deliver it to another part of the app 
  */

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

    case TO_CHANGE_NAME: {
      return {...defaultState.modals, changeName: true, fadeOn: true};
    }

    case TO_CHANGE_SECOND_NAME: {
      return {...defaultState.modals, changeSecondName: true, fadeOn: true};
    }

    case TO_CHANGE_EMAIL: {
      return {...defaultState.modals, changeEmail: true, fadeOn: true};
    }

    case OUT_MODALS: {
      return defaultState.modals;
    }

    default: {
      return state;
    }
    
  }


}