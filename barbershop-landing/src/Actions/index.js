import { 
    LOAD_USERS,
    LOAD_USER_DATA,
    REGISTER_USER,
    ADD_APPOINTMENT,
    REMOVE_APPOINTMENT
} from "./actionTypes";

export const loadUsers = () => ({
    type: LOAD_USERS
});

export const loadUserData = () => ({
    type: LOAD_USER_DATA
});

export const registerUser = () => ({
    type: REGISTER_USER
});

export const addAppointment = () => ({
    type: ADD_APPOINTMENT
});

export const removeAppointment = () => ({
    type: REMOVE_APPOINTMENT
});
