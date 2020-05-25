import { ADD_GUEST } from './types';

export const addGuest = (newGuest) => {
    return {
        type: ADD_GUEST,
        payload: newGuest 
    }
};