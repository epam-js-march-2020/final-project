import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAppointment } from '../../store/actions/account';
//import { CloseButton } from 'react-svg-buttons';
import './AppointmentCard.scss';
function AppointmentCard(props) {
  const dispatch = useDispatch();
  const removeCard = () => {
    dispatch(removeAppointment(props.item.id));
  };
  return (
    /*<div className='d-flex'>
      <h5>{props.service}</h5>
      
    </div>*/
    <tr>
      <th scope='row'>{props.item.service_name}</th>
      <td>
        {props.item.date} {props.item.time}
      </td>
      <td>{props.item.address}</td>
      <td>
        <button className='btn btn-danger' onClick={removeCard}>
          Отменить
        </button>
      </td>
    </tr>
  );
}
export default AppointmentCard;
