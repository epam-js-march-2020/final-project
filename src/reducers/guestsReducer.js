import { ADD_GUEST } from '../actions/types';

const initialState = {
    guests: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_GUEST:
            return {
                ...state,
                guests: [action.payload, ...state.guests] 
        }
        default:
            return state;
    }
}