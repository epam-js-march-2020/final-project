export function first(state = 0, action) {
    switch(action.type) {
        case 'add-first':
            return state + 1;
        default:
            return state;
    }
};

export function second(state = 0, action) {
    switch(action.type) {
        case 'add-second':
            return state + 1;
        default:
            return state;
    }
};

// export function user(state = false, action) {
//     switch (action.type) {
//         case 'activate':
//             return !state;
//         default:
//             return state;
//     }
// }

export const user = (state = null, action) => {
    switch (action.type) {
        case 'login' :
            return {
                ... action.user,
                appointments: action.user.appointments.slice()
            };
        default:
            return state
    }
}
