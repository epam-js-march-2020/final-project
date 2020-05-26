import { users } from '../../assets/db.json';
import { setLocalStorage, getLocalStorage } from './../helpers';
const initState = localStorage.getItem('users')
  ? getLocalStorage('users')
  : {
      users,
    };

const usersReducer = (state = initState, action) => {
  var newState;
  switch (action.type) {
    case 'USER_ADD':
      newState = { users: [...state.users, action.payload] };
      setLocalStorage('users', newState);
      return newState;
    case 'USER_UPDATE':
      newState = {
        users: [
          ...state.users.filter((el) => el.email !== action.payload.email),
          action.payload,
        ],
      };
      setLocalStorage('users', newState);
      return newState;
    default:
      return state;
  }
};
export default usersReducer;
