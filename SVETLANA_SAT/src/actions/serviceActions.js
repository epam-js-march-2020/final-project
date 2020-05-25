import { GET_SERVICES, GET_SERVICE } from './types';

export const getServices = () => {
    return {
        type:  GET_SERVICES
    } 
}

export const getService = (name) => {
    return {
        type:  GET_SERVICE,
        payload: name
    } 
}