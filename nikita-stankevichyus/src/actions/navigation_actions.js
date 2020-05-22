import { 
  TO_HOME, 
  TO_PROFILE, 
  TO_SERVICES, 
  TO_SERVICE 
} from '../actions_types/actions_types.js';

export function toHome() {
  return {
    type: TO_HOME,
  }
}

export function toProfile() {
  return {
    type: TO_PROFILE,
  }
}

export function toService(service) {
  return {
    type: TO_SERVICE,
    service: service,
  }
}

export function toServices() {
  return {
    type: TO_SERVICES,
  }
}