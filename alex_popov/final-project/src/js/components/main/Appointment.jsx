import React from 'react';
import WithFormChecker from './WithFormChecker';
import ServiceSelect from './ServiceSelect';
import Footer from '../Footer/Footer.jsx';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class Appointment extends WithFormChecker {
    constructor(props) {
        super(props);
        
        // the name of the services
        this.services = {
            cut: {
                name: 'Hair cut',
            },
            trim: {
                name: 'Beard trim',
            },
            cuttrim: {
                name: 'Hair cut and trim',
            },
            children: {
                name: 'Children',
            }
        }

        // list - array of days in the schedule
        //date - chossen date
        //choosen time for an appointment
        // name and phone - information about a person
        // if a user is logged the app get the information from his profile
        // type of the service that user want to make an appointment
        this.state = {
            list: [],
            date: '',
            time: 0,
            name: this.props.user ? this.props.user.name : '',
            phone: this.props.user ? this.props.user.phone : '',
            serviceType: this.props.match.params.name ? this.services[this.props.match.params.name].name : 'choose service',
        }

        this.onClickContainer = this.onClickContainer.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onClickBook = this.onClickBook.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
    }

    /**
     * get schedule and put it into the state
     */
    componentDidMount() {
        const list = JSON.parse( localStorage.getItem('appointments') );
        this.setState({
            list: list,
            date: list[0].date
        })
    }

    /**
     * refreshes the information about a user in the storage
     */
    componentDidUpdate() {
        const newState = {}
        if ( this.props.user && this.props.user.phone !== this.state.phone) {
            newState.phone = this.props.user.phone;
        }
        if ( this.props.user && this.props.user.name !== this.state.name) {
            newState.name = this.props.user.name;
        }
        if (newState.phone) {
            this.setState(newState)
        }
    }

    /**
     * returns arrau of date for renderirn
     */
    monthSchedule() {
        return this.state.list.map( (el) => {
            const date = new Date(el.date);
            const className = el.date === this.state.date ? 
                    'px-s appointment_item appointment_item-active' : 
                    'px-s appointment_item'; 

            return (
                <p 
                    key={el.date}  
                    data-schedule={el.date} 
                    className={className}
                >
                    {this.month[date.getMonth()]} {date.getDate()}
                </p>
            )
        })
    }

    /**
     * returns an array of elements for rendering a day schedule
     */
    daySchedule() {

        const dayId = this.state.list.findIndex( (el) => {
            return el.date === this.state.date
        })

        if (dayId !== -1) {
            const response = [];

            for (let key in this.state.list[dayId].appointments) {

                if (this.state.list[dayId].appointments[key] === 0) {
                    const lassName = this.state.time === key ? 
                            'px-s appointment_item appointment_item-active' : 
                            'px-s appointment_item'; 
                    response.push(<p className={lassName} key={key} data-schedule={key}>{key}</p>)
                }
            }

            return response.length > 0 ? response : 
                <p 
                    className='appointment_item appointment_item-active'
                >
                    There is no time available this day. Sorry.
                </p> ;
        }
    }

    /**
     * marks a chosen date and time and changes the information in the state
     */
    onClickContainer(ev) {
        if (ev.target.classList.contains('appointment_item')) {
            const id = ev.target.parentElement.id
            const newState = {
                [id]: ev.target.dataset.schedule
            }
            if (id === 'date') {
                newState.time = 0
            }
            this.setState(newState)
        }
    }

    /**
     * check the information in the state
     * return boolean
     */
    formCheck() {
        return !!this.state.date && 
                !!this.state.time && 
                this.state.phone.length === this.minLen.phone &&
                this.state.serviceType !== 'choose service';
    }

    /**
     * if the booked tiem is free, insert the information about the applintment in the databese
     * and clears the store
     */
    onClickBook() {
        const { date, time } = this.state;
        const schedule = JSON.parse( localStorage.getItem('appointments') );
        
        const dayId = schedule.findIndex( (el) => {
            return el.date === date;
        });
        
        if (dayId !== -1) {
            const scheduleDay = schedule[dayId];

            if (time in scheduleDay.appointments && scheduleDay.appointments[time] === 0) {

                scheduleDay.appointments[time] = {
                    id: this.props.user ? this.props.user.id : 0,
                    name: this.state.name,
                    phone: this.state.phone,
                    serviceType: this.state.serviceType
                }

                localStorage.setItem('appointments', JSON.stringify(schedule))

                this.setState({
                    list: schedule.slice(),
                    date: date,
                    time: 0
                });

                this.showMessage(date, time)
            }
        }
    }

    /**
     * render the message for an user
     */
    showMessage(date, time) {
        const month = this.monthFull[new Date(date).getMonth()];
        const day = new Date(date).getDate();

        document.querySelector('#message').classList.remove('transparent');
        document.querySelector('#message').classList.add('message-valid');
        document.querySelector('#message').innerText = `we are wiating for you on ${day}th of ${month} at ${time}`; 
    }

    render() {
        const bookButtonClassName = this.formCheck() ? 'form_button' : 'form_button form_button-disabled';
        const formClassName = this.props.user ? 'login_form user_login_form' : 'login_form user_login_form login_form-phone'
        
        return (
            <>
            <div className='container margin-top'>
                <h2>Book time</h2>

                <h3>Choose a day</h3>
                <div id='date' onClick={this.onClickContainer} className='appointments_dateContainer'>
                    {this.monthSchedule()}
                </div>

                <h3>Choose an hour</h3>
                <div id='time' onClick={this.onClickContainer} className='appoinments_daysContainer'>
                    {this.daySchedule()}
                </div>

                <div className={formClassName}>
                    {/* if a user is logged the app get the phone number from his profile */}
                    {this.props.user ? null : 
                        <>
                        <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                        <input onInput={this.onInput} id='phone' className='form_input form_input-yellow' type="text"/>
                        </>
                    }
                    
                    <ServiceSelect 
                        onChangeService={this.onChangeService} 
                        activeService={this.state.serviceType} 
                        serviceList={this.services} 
                    />

                    <div className='form_buttonsContainer'>
                        <button id='book' disabled={!this.formCheck()} onClick={this.onClickBook} className={bookButtonClassName} >Book</button>
                    </div>
                    
                    <p id='message' className="message transparent">example</p>

                </div>

            </div>
            <Footer footerClassName='footer footer-dark' />
            </>
        )
    }
}

const propsMap = (user) => (
    user
)

const actionsMap = (dispatch) => ({
    login: (user) => dispatch(actions.login(user))
})

export default connect(propsMap, actionsMap)( Appointment );