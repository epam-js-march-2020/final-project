import React from 'react';
import LinkButton from '../Utils/LinkButton';
import LinkButtonT from '../Utils/LinkButtonT';

class ServiceItem extends React.Component {

    render(){
    return (
        <div className='service__item-container'>
            <LinkButtonT path={this.props.service.path} titleText={this.props.service.serviceName}/>
            <div className='service__container'>
                <p className='service__description'>{this.props.service.description}</p>
                <span className='service__info'>от {this.props.service.price}₽</span>
                <LinkButton path={this.props.service.path} buttonText={'More'} />
            </div>
        </div>
    );
    }
}

export default ServiceItem;