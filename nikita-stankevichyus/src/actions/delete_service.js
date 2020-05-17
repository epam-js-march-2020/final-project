import { DELETE_SERVICE } from '../actions_types/actions_types.js';

export function deleteService(index) {
  return {
    type: DELETE_SERVICE,
    index: index,
  }
}