import {ON_REG, LOG_OFF, LOG_IN, ADD_ORDER, DELETE_ORDER, USER_INFO_EDIT, SAVE_USER_INFO, CANCEL_EDIT} from "./actionTypes";


const logIn = (email) => {
    return {
        type: LOG_IN,
        email
    }
};

const logOff = () => {
    return {
        type: LOG_OFF
    }
};

export const dispLogOff = (dispatch) => () => {
    dispatch(logOff());
};
const onReg = (regInfo) => {
    return {
        type: ON_REG,
        regInfo
    }
};

export const dispOnReg = (dispatch) => (e) => {
    dispatch(onReg(e));
};

export const dispLogIn = (dispatch) => () => {
    dispatch(logIn());
};
export const addOrder = newOrder => ({
  type: ADD_ORDER,
  newOrder
});

export const deleteOrder = orderId => ({
  type: DELETE_ORDER,
  orderId
});

export const userInfoEdit = () => ({
  type: USER_INFO_EDIT
});

export const saveUserInfo = info => ({
  type: SAVE_USER_INFO,
  info
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT
});