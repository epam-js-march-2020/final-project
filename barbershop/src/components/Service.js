import React from 'react';
import Booking from './Booking';

const Service = (props) => {
  const { service } = props.location;

  return (
    <div className="main_content">
      {service ? (
        <div>
          <div className="service_head">
            <h1>{service.title}</h1>
          </div>
          <div className="service_body">
            <p><img src={service.img_src} alt={service.title} /></p>
            <p>{service.description}</p>
            <p><strong>Price: {service.price}</strong></p>
            <Booking service={service} />
          </div>
        </div>
      ) : (
        <div>Oops, something went wrong!</div>
      )}
    </div>
  );
};

export default Service;
