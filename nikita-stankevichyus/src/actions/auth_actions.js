import { 
  LOG_IN, 
  LOG_OUT, 
  SIGN_UP, 
  ADD_SERVICE, 
  ADD_GUEST_SERVICE, 
  DELETE_SERVICE, 
  CHANGE_NAME, 
  CHANGE_SECOND_NAME, 
  CHANGE_EMAIL 
} from '../actions_types/actions_types.js';

export function logIn(name, secondName, email, services) {
  return {
    type: LOG_IN,
    name: name,
    secondName: secondName,
    email: email,
    services: services,
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

export function signUp() {
  return {
    type: SIGN_UP,
  }
}

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

export function deleteService(index) {
  return {
    type: DELETE_SERVICE,
    index: index,
  }
}

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

