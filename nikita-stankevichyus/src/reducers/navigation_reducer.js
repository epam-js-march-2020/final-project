import { TO_HOME } from '../actions_types/actions_types.js';
import { TO_PROFILE } from '../actions_types/actions_types.js';
import { TO_SERVICES } from '../actions_types/actions_types.js';
import { TO_SERVICE } from '../actions_types/actions_types.js'

import { defaultState } from '../default_state';


export const reducerNavigation = (state = defaultState.navigation, action) => {
  
  /*
   * If corresponding parameter is true page is shown
   * bufferService field is used to deliver service info to another part of the programm
  */


  switch (action.type) {
    case TO_HOME: return {
      atHome: true,
      atProfile: false,
      atServices: false,
      atService: false,
    };
    case TO_PROFILE: return {
      atHome: false,
      atProfile: true,
      atServices: false,
      atService: false,
    };
    case TO_SERVICES: return {
      atHome: false,
      atProfile: false,
      atServices: true,
      atService: false,
    };

    case TO_SERVICE: return {
      atHome: false,
      atProfile: false,
      atServices: false,
      atService: true,
      bufferService: action.service,
    };

    default: return state;
  }
}