import React, {Component} from 'react';
import Button from '../Utils/Button';
import ServiceData from '../../ServiceData';
import ServiceSelect from './ServicesSelect';
import {connect} from 'react-redux';
import SubmitSuccess from '../Utils/SubmitSuccess';
import { addOrder } from '../../actions/actions.js'

class ServiceForm extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.service = React.createRef();
        this.date = React.createRef();
        this.time = React.createRef();
        this.state = { submit: false };
    }

    onSubmit = (e) => {
        this.props.addOrder({
            id: new Date().getMilliseconds() + this.name.current.value,
            name: this.name.current.value,
            service: this.service.current.value,
            email: this.email.current.value,
            date: this.date.current.value,
            time: this.time.current.value
        });
        e.preventDefault();
        this.setState({submit: true});
    };

    render() {
        let dateToday = new Date();
        let minDate = dateToday.toISOString().split('T')[0];
        let afterTwoWeeks = new Date(dateToday.setDate(dateToday.getDate()+ 14));
        let maxDate = afterTwoWeeks.toISOString().split('T')[0];

        if(this.state.submit) {
            return <SubmitSuccess />
        }

        return (
            <form className='form' onSubmit={this.onSubmit}>
                <ul className='form__list'>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='nameInput'>Service:</label>
                        <ServiceSelect services={ServiceData} refName={this.service} selectedItem={this.props.selectedItem}/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='nameInput'>Please, enter your name:</label>
                        <input className='form__input' ref={this.name} defaultValue={this.props.isLoggedIn ? this.props.userName : ''} type='text' maxLength='20' minLength='3' placeholder='Your name' id='nameInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='emailInput'>Your email:</label>
                        <input className='form__input' ref={this.email} defaultValue={this.props.isLoggedIn ? this.props.userEmail : ''} type='email' placeholder='email' id='emailInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='dateInput'>Choose date:</label>
                        <input className='form__input' ref={this.date} defaultValue={minDate} min={minDate} max={maxDate} type='date' placeholder='date' id='dateInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='timeInput'>Time:</label>
                        <input className='form__input' type='time' ref={this.time} defaultValue='09:00' min='09:00' max='22:00' placeholder='Time' id='timeInput' required/>
                    </li>
                </ul>
                <Button type={'submit'} buttonText={'Submit'}/>
            </form>
        );
    }
}

const mapStateToProps = ({orders, isLoggedIn, userName, userEmail}) => {
    return {
        orders,
        isLoggedIn,
        userName,
        userEmail
    };
};

export default connect(mapStateToProps, { addOrder })(ServiceForm);