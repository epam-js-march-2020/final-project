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

export function user(state = false, action) {
    switch (action.type) {
        case 'activate':
            return !state;
        default:
            return state;
    }
}

