import { appointments } from '../../assets/db.json';
const initState = localStorage.getItem('account')
  ? JSON.parse(localStorage.getItem('account'))
  : {
      appointments,
    };

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case 'APPOINTMENT_ADD':
      console.log(action.payload);
      return {
        appointments: [...state.appointments, action.payload],
      };
    case 'APPOINTMENT_REMOVE':
      return {
        appointments: state.appointments.filter(
          (el) => el.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default accountReducer;
