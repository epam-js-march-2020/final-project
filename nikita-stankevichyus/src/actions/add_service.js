import { ADD_SERVICE } from '../actions_types/actions_types.js';

export function addService(serviceName) {
  return {
    type: ADD_SERVICE,
    service: serviceName,
  }
}