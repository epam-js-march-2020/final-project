import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * links oblect with information about services an links
 * activeService - part af url that tell us about the needed information
 * return an array of Nav links
 */
const ServiceNav = ({ links, activeService }) => (
    <>
        {
        Object.keys(links).map( (link) => {
            const price = link === activeService ? 
                <span> {`£ ${links[link].price}`} </span> : 
                null ; 

            const containerClassName = link === activeService ? 
                'services_linkContainer services_linkContainer-active' : 
                'services_linkContainer';

            return (
                <div key={links[link].name} className={containerClassName} >
                    <NavLink  className='service_link' to={links[link].path}> {links[link].name}</NavLink>
                    {price}
                </div>
            )
        })
        }
    </>
)

export default ServiceNav;