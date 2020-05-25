import React from 'react';
import './services.css';
// import ServiceList from './serviceList/serviceList';
import './services.css';
import serviceList from './data';
import {Link} from 'react-router-dom';

const Services = (props) => {
    // const serviceRender = serviceList.map(item => <div>
    // <ServiceList key={item.id} title={item.title} items={item.serviceList} img={item.imgSrc} /><hr/></div> );

    const serviceRender  = serviceList.map((item, index) => 
    <div key={index}>
    <h2>{item.title}</h2>
    {item.serviceList.map((item) => 
    <Link key={item.name} to={`/services/${item.id}`} className="service-category">
    <p>{item.name}</p>
    <img src={item.imgSrc} alt={item.name}/>
    </Link>)}
    </div>
    
    )

    return ( 
    <div>
    <div className="services">
        {serviceRender}
    </div>
    </div> 
    );
}
 
export default Services;

