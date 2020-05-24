import { 
  TO_HOME, 
  TO_PROFILE, 
  TO_SERVICES, 
  TO_SERVICE,
  HIDE_BAR,
  SHOW_BAR
} from '../actions_types/actions_types.js';

// Dispatched when user/guest opens home page
export function toHome() {
  return {
    type: TO_HOME,
  }
}

// Dispatched when user opens profile page
export function toProfile() {
  return {
    type: TO_PROFILE,
  }
}

// Dispatched when user/guest opens a service page
export function toService(service) {
  return {
    type: TO_SERVICE,
    service: service,
  }
}

// Dispatched when user/guest opens services list page
export function toServices() {
  return {
    type: TO_SERVICES,
  }
}

export function hideBar() {
  return {
    type: HIDE_BAR,
  }
}

export function showBar() {
  return {
    type: SHOW_BAR,
  }
}