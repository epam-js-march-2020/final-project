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

// Dispatched after user logged in
export function logIn(name, secondName, email, services) {
  return {
    type: LOG_IN,
    name: name,
    secondName: secondName,
    email: email,
    services: services,
  }
}

// Dispatched after user logged out
export function logOut() {
  return {
    type: LOG_OUT,
  }
}

// Dispatched after a guest signed up a new account
export function signUp() {
  return {
    type: SIGN_UP,
  }
}

// Dispatched after user orders a new service
export function addService(serviceName, serviceDate) {
  return {
    type: ADD_SERVICE,
    serviceName: serviceName,
    serviceDate: serviceDate,
  }
}

// Dispatched after guest orders a new service
export function addGuestService(serviceName, serviceDate, guestNumber) {
  return {
    type: ADD_GUEST_SERVICE,
    serviceName: serviceName,
    serviceDate: serviceDate,
    guestNumber: guestNumber,
  }
}

// Dispatched after user deletes a service
export function deleteService(index) {
  return {
    type: DELETE_SERVICE,
    index: index,
  }
}

// Dispatched after user changes his/her name
export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name: name,
  }
}

// Dipatched after user changes his/her second name
export function changeSecondName(secondName) {
  return {
    type: CHANGE_SECOND_NAME,
    secondName: secondName,
  }
}

// Dispatched after user changes his/her email
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email: email,
  }
}

