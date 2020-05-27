import React from 'react';
import Booking from './Booking';

const Service = (props) => {
  const { service } = props.location;
  const isAuth = localStorage.getItem('isAuth') === 'true';

  return (
    <div className="main_content">
      <div>{service && <h3>{service.title}</h3>}</div>
      <div>
        <Booking service={service}/>
      </div>
    </div>
  );
};

export default Service;
