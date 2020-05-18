import { CHANGE_NAME, CHANGE_SECOND_NAME, CHANGE_EMAIL } from '../actions_types/actions_types.js';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name: name,
  }
}

export function changeSecondName(secondName) {
  return {
    type: CHANGE_SECOND_NAME,
    secondName: secondName,
  }
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email: email,
  }
}