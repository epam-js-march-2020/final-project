import { GET_USERS, 
         CHECK_USER, 
         GET_USER, 
         LOG_OUT, 
         ADD_USER, 
         GET_USER_SERVICES,
         ADD_USER_SERVICE,
         DELETE_USER_SERVICE,
         UPDATE_USER } from '../actions/types';

const initialState = {
    users: [
        {
            id: 1,
            userName: 'Jane',
            email: 'jane@some.com',
            password: '123456e!',
            mobile: '8-222-222-22-22',
            auth: false,
            myServices:[{id: 1, service: 'HAIRCUT'},{id: 2, service:'BEARD && MOUSTACHE TRIMS'}]
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return{
                ...state,
            }

        case CHECK_USER:
            return {
                ...state,
                users: state.users.map(
                    user => {
                        if(user.email === action.payload.email&&user.password === action.payload.password) {
                           user.auth = true 
                        }
                        return user
                        
                    })
        
            } 

        case GET_USER:
            return {
                ...state,
                users: state.users.filter(user => user.auth === true)
        
            } 

        case LOG_OUT:
            return {
                ...state,
                users: state.users.map(
                    user => {
                        if(user.auth === true) {
                            user.auth = false
                        }
                        return user
                    }
                )
            }

        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users] 
            }

        case GET_USER_SERVICES:
            return {
                ...state,
                myServices: state.users.map(
                    user => {
                        if(user.auth === true) {
                            return user.myServices
                        } 
                    })
            }

        case ADD_USER_SERVICE:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.auth === true) {
                        // user.myServices.map(item => {
                        //     if(item.service === action.payload.service) {
                        //        return user.myServices
                        //     } else {
                        //         user.myServices.push(action.payload); 
                        //     }
                        // })
                        if(user.myServices.some(item => item.service === action.payload.service)){
                            return user
                        } else {
                            user.myServices.push(action.payload); 
                        }
                        
                    }
                    return user
                })
            }
        
        case DELETE_USER_SERVICE:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.auth === true) {
                        user.myServices = user.myServices.filter(item => item.service!==action.payload);
                   }
                   return user
                })
            }

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.auth === true) { 
                        if(user.userName !== action.payload.userName&&action.payload.userName !=='') {
                            user.userName = action.payload.userName
                        }
                        if(user.email !== action.payload.email&&action.payload.email !==''){
                            user.email = action.payload.email
                        }
                        if(user.password !== action.payload.password&&action.payload.password !=='') {
                            user.password = action.payload.password
                        }
                        if(user.mobile !== action.payload.mobile&&action.payload.mobile !=='') {
                            user.mobile = action.payload.mobile
                        } 
                    }
                    return user
                   
                })
            }
        
        default:
            return state;
    }
}