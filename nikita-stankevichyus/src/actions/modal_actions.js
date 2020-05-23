import { 
  TO_LOG_IN, 
  TO_SIGN_UP, 
  TO_ADD_SERVICE, 
  TO_CHANGE_NAME, 
  TO_CHANGE_SECOND_NAME, 
  TO_CHANGE_EMAIL, 
  OUT_MODALS 
} from '../actions_types/actions_types.js';

// Dispatched when guest opens signUp window
export const toSignUp = () => {
  return {
    type: TO_SIGN_UP,
  }
}

// Dispatched when guest opens logIn window
export const toLogIn = () => {
  return {
    type: TO_LOG_IN,
  }
}

// Dispatched when guest/user opens addService window
export const toAddService = (name) => {
  return {
    type: TO_ADD_SERVICE,
    name: name,
  }
}

// Dispatched when user opens name edit window
export const toChangeName = () => {
  return {
    type: TO_CHANGE_NAME,
  }
}

// Dispatched when user opens second name edit window
export const toChangeSecondName = () => {
  return {
    type: TO_CHANGE_SECOND_NAME,
  }
}

// Dispatched when user opens email edit window
export const toChangeEmail = () => {
  return {
    type: TO_CHANGE_EMAIL,
  }
}

// Dispatched when user closes any modal window
export const outModals = () => {
  return {
    type: OUT_MODALS,
  }
}
