import { TO_SIGN_UP, TO_LOG_IN, OUT_MODALS } from '../actions_types/actions_types.js';

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

export const outModals = () => {
  return {
    type: OUT_MODALS,
  }
}