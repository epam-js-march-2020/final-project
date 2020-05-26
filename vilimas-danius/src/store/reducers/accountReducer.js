import { appointments } from '../../assets/db.json';
import { setLocalStorage, getLocalStorage } from './../helpers';
const initState = localStorage.getItem('account')
  ? getLocalStorage('account')
  : {
      appointments,
    };

const accountReducer = (state = initState, action) => {
  var newState;
  switch (action.type) {
    case 'APPOINTMENT_ADD':
      newState = {
        appointments: [...state.appointments, action.payload],
      };
      setLocalStorage('account', newState);
      return newState;
    case 'APPOINTMENT_REMOVE':
      newState = {
        appointments: state.appointments.filter(
          (el) => el.id !== action.payload
        ),
      };
      setLocalStorage('account', newState);
      return newState;
    default:
      return state;
  }
};
export default accountReducer;
