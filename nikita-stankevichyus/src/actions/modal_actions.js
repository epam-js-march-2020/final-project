import { 
  TO_LOG_IN, 
  TO_SIGN_UP, 
  TO_ADD_SERVICE, 
  TO_CHANGE_NAME, 
  TO_CHANGE_SECOND_NAME, 
  TO_CHANGE_EMAIL, 
  OUT_MODALS 
} from '../actions_types/actions_types.js';

export const toSignUp = () => {
  return {
    type: TO_SIGN_UP,
  }
}

export const toLogIn = () => {
  return {
    type: TO_LOG_IN,
  }
}

export const toAddService = (name) => {
  return {
    type: TO_ADD_SERVICE,
    name: name,
  }
}

export const toChangeName = () => {
  return {
    type: TO_CHANGE_NAME,
  }
}

export const toChangeSecondName = () => {
  return {
    type: TO_CHANGE_SECOND_NAME,
  }
}

export const toChangeEmail = () => {
  return {
    type: TO_CHANGE_EMAIL,
  }
}

export const outModals = () => {
  return {
    type: OUT_MODALS,
  }
}
