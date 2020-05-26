import React from 'react';
import ServiceItem from './ServiceItem';

class ServicesList extends React.Component {
    render(){
    const servicesElements = this.props.services.map(service =>
        <li className='service__item' key={service.id}>
            <ServiceItem service={service}/>
        </li>
    );

    return (
        <ul className='service__list'>
            {servicesElements}
        </ul>
    );
    }
}

export default ServicesList;