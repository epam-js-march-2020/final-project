import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ServiceCard from './ServiceCard';
import BookModal from './BookModal';
import { services } from '../../assets/db.json';
import warning from '../../assets/img/warning.svg';
import './ServicesPage.scss';

function ServicesPage() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const Booking = useSelector((state) => state.bookingModal);
  return (
    <>
      <div className='container'>
        <div className='row mt-3'>
          {!isLogged && (
            <div className='d-flex warning'>
              <img src={warning} alt='!' width='40vw'></img>
              <p className='h4 text-center'>
                Для того что бы записаться на услугу войдите или
                <NavLink to='/signUp'> зарегистрируйтесь</NavLink>!
              </p>
            </div>
          )}
        </div>
        <div className='row mt-5 justify-content-around'>
          {services.map((el) => (
            <ServiceCard item={el} key={el.id} />
          ))}
        </div>
      </div>
      {Booking.isBooking && (
        <BookModal message='Привет' service={Booking.BookingId} />
      )}
    </>
  );
}
export default ServicesPage;
