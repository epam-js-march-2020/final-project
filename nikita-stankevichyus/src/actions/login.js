import { LOG_IN } from '../actions_types/actions_types.js';

export function logIn(who) {
  return {
    type: LOG_IN,
    profile: who,
  }
}
