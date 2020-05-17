import { LOG_IN } from '../actions_types/actions_types.js';

export function logIn(name, secondName, email, services) {
  return {
    type: LOG_IN,
    name: name,
    secondName: secondName,
    email: email,
    services: services,
  }
}
