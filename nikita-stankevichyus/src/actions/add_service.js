import { ADD_SERVICE } from '../actions_types/actions_types.js';

export function addService(serviceName, servicePrice) {
  return {
    type: ADD_SERVICE,
    serviceName: serviceName,
    servicePrice: servicePrice,
  }
}