import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesList = () => {
  const [services, setServices] = React.useState([
    { id: 1, title: 'Man haircut', price: 1000 },
    { id: 2, title: 'Beard shave', price: 500 },
    { id: 3, title: 'Woman haircut', price: 2000 },
  ]);

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
