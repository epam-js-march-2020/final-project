const initialState = (localStorage.getItem('isLoggedIn') !== true) ? ({
        isLoggedIn: localStorage.getItem('isLoggedIn'),
        userName: localStorage.getItem('userName'),
        userEmail: localStorage.getItem('userEmail'),
        infoEdit: false,
        // orders: localStorage.getItem('orders')
        orders: [],
        }) :( { 
        infoEdit: false,
        userName: 'UserName',
        userEmail: 'blank@mail.co',
        orders: [],
        isLoggedIn: false
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                userEmail: localStorage.getItem('userEmail')
            };
        case 'LOG_OFF':

            return {
                ...state,
                isLoggedIn: false,
                infoEdit: false
            };
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [...state.orders,
                action.newOrder]
            };
        case 'DELETE_ORDER':
            const orderIndex = state.orders.findIndex(({ id }) => id === action.orderId);
            return {
                ...state,
                orders: state.orders.slice(0, orderIndex).concat(state.orders.slice(orderIndex + 1))
            };
        case 'USER_INFO_EDIT':
            return {
                ...state,
                infoEdit: true
            };
        case 'SAVE_USER_INFO':
            return {
                ...state,
                infoEdit: false,
                userName: action.info.userName,
                userEmail: action.info.userEmail
            };
        case 'CANCEL_EDIT':
            return {
                ...state,
                infoEdit: false
            };
        case 'ON_REG':
            return {
                ...state,
                isLoggedIn: true,
                userName: localStorage.getItem('userName'),//it is not nearly ideal but i wanted to implement localstorage 
                userEmail: localStorage.getItem('userEmail')
            }
        default:
            return state;
    }
};

export default reducer;