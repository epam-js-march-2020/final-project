import { TO_HOME } from '../actions_types/actions_types.js';
import { TO_PROFILE } from '../actions_types/actions_types.js';
import { TO_SERVICES } from '../actions_types/actions_types.js';


import { defaultState } from '../default_state';


export const reducerNavigation = (state = defaultState.navigation, action) => {
  
  switch (action.type) {
    case TO_HOME: return {
      atHome: true,
      atProfile: false,
      atServies: false,
    };
    case TO_PROFILE: return {
      atHome: false,
      atProfile: true,
      atServies: false,
    };
    case TO_SERVICES: return {
      atHome: false,
      atProfile: false,
      atServies: true,
    };
    default: return state;
  }
}