import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment } from './../../../store/actions/account';

function BookButton(props) {
  const email = useSelector((state) => state.auth.user.email);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addAppointment({
        id: Math.random(),
        service_name: props.service,
        user_email: email,
        time: '12:00',
      })
    );
  };
  return (
    <button
      className='btn btn-primary btn-block align-text-bottom '
      onClick={handleClick}
      disabled={!isLogged}
    >
      Записаться
    </button>
  );
}

export default BookButton;
