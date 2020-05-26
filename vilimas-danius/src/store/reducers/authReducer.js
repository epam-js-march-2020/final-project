import { setLocalStorage, getLocalStorage } from './../helpers';
const initState = localStorage.getItem('auth')
  ? getLocalStorage('auth')
  : {
      isLoading: false,
      isLogged: false,
      user: { email: '', password: '', firstName: '', lastName: '' },
    };

const authReducer = (state = initState, action) => {
  var newState;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      newState = Object.assign({}, state, {
        isLogged: true,
        user: action.payload,
      });
      setLocalStorage('auth', newState);
      return newState;
    case 'LOGIN_FAILURE':
      newState = Object.assign({}, state, {
        isLogged: false,
        user: { email: '', password: '', firstName: '', lastName: '' },
      });
      setLocalStorage('auth', newState);
      return newState;
    case 'LOGIN_OUT':
      newState = Object.assign({}, state, {
        isLogged: false,
        user: { email: '', password: '', firstName: '', lastName: '' },
      });

      setLocalStorage('auth', newState);
      return newState;
    default:
      return state;
  }
};
export default authReducer;
