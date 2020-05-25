import { CHECK_USER, 
         GET_USERS, 
         GET_USER, 
         LOG_OUT, 
         ADD_USER, 
         GET_USER_SERVICES, 
         ADD_USER_SERVICE,
         DELETE_USER_SERVICE,
         UPDATE_USER } from './types';


export const getUsers = () => {
    return {
        type: GET_USERS 
    }
};

export const checkUser = (user) => {
    return {
        type:  CHECK_USER,
        payload: user
    } 
};

export const getUser = () => {
    return {
        type:  GET_USER,
        // payload: user
    } 
};

export const logOut = (username) => {
    return {
        type: LOG_OUT,
        payload: username
    }
};
 
export const addUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser 
    }
};

export const getUserServices = () => {
    return {
        type: GET_USER_SERVICES
    }
}

export const addUserService = (newService) => {
    return {
        type: ADD_USER_SERVICE,
        payload: newService
    }
}

export const deleteUserService = (service) => {
    return {
        type: DELETE_USER_SERVICE,
        payload: service
    }
}

export const updateUser = (userInfo) => {
    return {
        type: UPDATE_USER,
        payload: userInfo
    }
}
