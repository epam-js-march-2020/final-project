import { TO_SERVICE } from '../actions_types/actions_types.js';

export function toService(service) {
  return {
    type: TO_SERVICE,
    service: service,
  }
}

