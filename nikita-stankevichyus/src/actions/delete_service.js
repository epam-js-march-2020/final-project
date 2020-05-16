import { DELETE_SERVICE } from '../actions_types/actions_types.js';

export function deleteService(serviceName) {
  return {
    type: DELETE_SERVICE,
    service: serviceName,
  }
}