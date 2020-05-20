import { ADD_SERVICE, ADD_GUEST_SERVICE } from '../actions_types/actions_types.js';

export function addService(serviceName, serviceDate) {
  return {
    type: ADD_SERVICE,
    serviceName: serviceName,
    serviceDate: serviceDate,
  }
}

export function addGuestService(serviceName, serviceDate, guestNumber) {
  return {
    type: ADD_GUEST_SERVICE,
    serviceName: serviceName,
    serviceDate: serviceDate,
    guestNumber: guestNumber,
  }
}