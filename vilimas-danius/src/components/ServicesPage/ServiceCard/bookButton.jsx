import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activateBooking } from '../../../store/actions/booking';

function BookButton(props) {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(activateBooking(props.service));
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
