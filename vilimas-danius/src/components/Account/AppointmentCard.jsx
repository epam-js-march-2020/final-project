import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAppointment } from '../../store/actions/account';

function AppointmentCard(props) {
  const dispatch = useDispatch();
  const removeCard = () => {
    dispatch(removeAppointment(props.appointment_id));
  };
  return (
    <div>
      {props.service}
      <button onClick={removeCard}>Отменить</button>
    </div>
  );
}
export default AppointmentCard;
