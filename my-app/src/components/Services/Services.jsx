import React from 'react';
import ServicesList from './ServicesList';
import ServiceData from '../../ServiceData';

class Services extends React.Component {
    render(){
    return (
        <div className='service'>
            <ServicesList services={ServiceData}/>
        </div>
    );
    }
}

export default Services;