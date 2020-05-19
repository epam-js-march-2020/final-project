export const user = (state = null, action) => {
    switch (action.type) {
        case 'login' :
            return {
                ...action.user,
                appointments: action.user.appointments.slice()
            };
        case 'logout' :
            return null;
        default:
            return state
    }
}
