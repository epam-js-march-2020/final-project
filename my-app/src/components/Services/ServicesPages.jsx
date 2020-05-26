import React, {Component} from 'react';
import Button from '../Utils/Button';
import ServiceAdd from './ServiceAdd';

class ServicesPages extends Component {
    state = {
        formOpen: false
    };

    buttonHandler = () => {
        this.setState({
            formOpen: !this.state.formOpen
        })
    };

    render() {
        const form = this.state.formOpen && <ServiceAdd selectedItem={this.props.services.serviceName}/>;
        return (
            <section className='service-page'>
                <div>
                    <h1 className='service__title service-page__title'>{this.props.services.serviceName}</h1>
                    <p className='service-page__description'>{this.props.services.fullDescription}</p>
                </div>
                <span className='service__info'>{this.props.services.price}₽</span>
                <Button type={'button'} onClick={this.buttonHandler} buttonText={this.state.formOpen ? 'Cancel' : 'Add'}/>
                {form}
            </section>
        );
    }
}

export default ServicesPages;