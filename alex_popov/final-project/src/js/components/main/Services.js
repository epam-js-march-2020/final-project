import React from 'react';
import { NavLink } from 'react-router-dom';

function ServiceNav(props) {
    const {links, activeService} = props;
    return (
        <>
            {Object.keys(links).map( (link) => {
            const price = link === activeService ? <span> {`£ ${links[link].price}`} </span> : null ; 
            const containerClassName = link === activeService ? 'services_linkContainer services_linkContainer-active' : 'services_linkContainer';
            return (
                <div key={links[link].name} className={containerClassName} >
                    <NavLink  className='service_link service_link-black' to={links[link].path}> {links[link].name}</NavLink>
                    {price}
                </div>
            )
            })}
        </>
    )
}
  
const prices = {
    cut: {
        price: 25,
        name: 'Hair cut',
        path: '/services/cut'
    },
    trim: {
        price: 15,
        name: 'Beard trim',
        path: '/services/trim'
    },
    cuttrim: {
        price: 35,
        name: 'Cut and Trim',
        path: '/services/cuttrim'
    },
    children: {
        price: 10,
        name: 'Children',
        path: '/services/children'
    }
}
  
function Services(props) { 
    const serviceName = props.match.params.name ? props.match.params.name : 'default';
    const className = `container_service container_service-${serviceName}`;
    // console.log(serviceName  in prices)
    if ( !( serviceName in prices ) && serviceName !== 'default') {
        props.history.push('/404')
    }
    return (
        <div className={className}>
            <div className='services_links services_links-white'>
                <ServiceNav activeService={serviceName} links={prices} />
            </div>
        </div>
    )
}

export default Services;