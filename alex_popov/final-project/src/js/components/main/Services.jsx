import React from 'react';
import { NavLink } from 'react-router-dom';

import ServiceNav from './ServiceNav';

/**
 * renders different content about services
 */
class Services extends React.Component{
    constructor(props) {
        super(props)

        // information about prices, roots and  name of cervices
        this.prices = {
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
    } 

    render() {
        const appointmentLink = this.props.match.params.name ? 
            `/${this.props.match.params.name}` : 
            '';

        const serviceName = this.props.match.params.name ? 
            this.props.match.params.name : 
            'default';

        const className = `container_service container_service-${serviceName}`;
        
        // if the component have no information about the choosen service
        // or the link is wrong redirects to 404 page
        if ( !( serviceName in this.prices ) && serviceName !== 'default') {
            this.props.history.push('/404')
        }

        return (
            <div className={className}>
                <div className='services_links_background'></div>
                <div className='services_links services_links-white'>
                    <ServiceNav activeService={serviceName} links={this.prices} />
                    <div key='book' className='services_linkContainer' >
                        <NavLink className='service_link' to={`/appointment${appointmentLink}`} >Book time</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;