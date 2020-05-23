import React from 'react';
import { NavLink } from 'react-router-dom';

function ServiceNav({links, activeService}) {
    return (
        <>
            {
                Object.keys(links).map( (link) => {
                    const price = link === activeService ? <span> {`£ ${links[link].price}`} </span> : null ; 
                    const containerClassName = link === activeService ? 'services_linkContainer services_linkContainer-active' : 'services_linkContainer';
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
}

class Services extends React.Component{
    constructor(props) {
        super(props)
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
        const serviceName = this.props.match.params.name ? this.props.match.params.name : 'default';
        const appointmentLink = this.props.match.params.name ? `/${this.props.match.params.name}` : '';
        const className = `container_service container_service-${serviceName}`;
        
        if ( !( serviceName in this.prices ) && serviceName !== 'default') {
            this.props.history.push('/404')
        }
        return (
            <div className={className}>
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