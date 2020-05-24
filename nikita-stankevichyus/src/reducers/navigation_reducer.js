import { 
  TO_HOME, 
  TO_PROFILE, 
  TO_SERVICES, 
  TO_SERVICE,
  HIDE_BAR,
  SHOW_BAR, 
} from '../actions_types/actions_types.js';

import { defaultState } from '../default_state';


export const reducerNavigation = (state = defaultState.navigation, action) => {
  
  /*
   * If corresponding parameter is true page is shown
   * bufferService field is used to deliver service info to another part of the programm
  */


  switch (action.type) {
    case TO_HOME: return {...state,
      atHome: true,
      atProfile: false,
      atServices: false,
      atService: false,
    };
    case TO_PROFILE: return {...state,
      atHome: false,
      atProfile: true,
      atServices: false,
      atService: false,

    };
    case TO_SERVICES: return {...state,
      atHome: false,
      atProfile: false,
      atServices: true,
      atService: false,
    };

    case TO_SERVICE: return {...state,
      atHome: false,
      atProfile: false,
      atServices: false,
      atService: true,
      bufferService: action.service,
    };

    case HIDE_BAR: return {...state,
      barShown: false,
    };

    case SHOW_BAR: return {...state,
      barShown: true,
    };

    default: return state;
  }
}