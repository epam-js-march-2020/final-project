import { CHANGE_DATA } from '../actions_types/actions_types.js';

export function changeData(firstName, secondName, email) {
  return {
    type: CHANGE_DATA,
    firstName: firstName,
    secondName: secondName,
    email: email,
  }
}
