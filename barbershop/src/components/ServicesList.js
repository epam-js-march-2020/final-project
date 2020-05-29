import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesList = () => {
  const services = JSON.parse(localStorage.getItem('servicesList'));

  return (
    <div id="servicesList" className="main_content">
      <div className="services_list_head">
        <h1>Services list</h1>
      </div>
      {services.length > 0 ? (
        <div className="services_list_body">
          {services.map((service) => {
            return (
              <div key={service.id} className="services_list_service">
                <div className="services_list_service_head">
                  <h3>{service.title}</h3>
                </div>
                <div className="services_list_service_body">
                  <img className="" src={service.img_src} alt={service.title} />
                  <span>Price: {service.price}</span>
                  <NavLink
                    to={{ pathname: '/services/' + service.id, service }}
                  >
                    Find out more
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>There is no services for now</div>
      )}
    </div>
  );
};

export default ServicesList;
