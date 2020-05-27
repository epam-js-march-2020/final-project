import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesList = () => {
  const services = JSON.parse(localStorage.getItem('servicesList'));

  return (
    <div id="servicesList" className="main_content">
      <ul>
        {services.map((service) => {
          return (
            <li key={service.id}>
              <span>{service.title}</span>
              <NavLink to={{ pathname: '/services/' + service.id, service }}>
                More
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
