import React from 'react';

class ServiceSelect extends React.Component {
    render(){
    let id = 0;
    const optionItem = this.props.services.map(service =>
        <option defaultValue={service.serviceName} key={id++}>{service.serviceName} {service.price}₽</option>
    );

    return (
        <select className='form__input' name={this.props.name} ref={this.props.refName} defaultValue={this.props.selectedItem}>
            {optionItem}
        </select>
    );
    }
}

export default ServiceSelect;