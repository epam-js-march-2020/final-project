import { TO_LOG_IN } from '../actions_types/actions_types.js';
import { TO_SIGN_UP } from '../actions_types/actions_types.js';
import { OUT_MODALS } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export function reducerModals(state = defaultState.modals, action) {
  switch (action.type) {
    case TO_LOG_IN: return {...defaultState.modals, logIn: true, fadeOn: true};
    case TO_SIGN_UP: return {...defaultState.modals, signUp: true, fadeOn: true};
    case OUT_MODALS: return state;
    default: return state;
  }


}