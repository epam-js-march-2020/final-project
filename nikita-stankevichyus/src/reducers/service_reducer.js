import { ADD_SERVICE } from '../actions_types/actions_types.js';
import { DELETE_SERVICE } from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export const reducerService = (state = defaultState, action) => {
  return state;
  // if (action.type === ADD_SERVICE) {

  //   let newState = Object.assign({}, state);
  //   newState.services.push(action.service);
  //   return newState;

  // } else {
  //   return state;
  // }
}