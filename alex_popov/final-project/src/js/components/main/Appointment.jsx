import React from 'react';
import WithFormChecker from './WithFormChecker';
import Footer from '../Footer/Footer'

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class Appointment extends WithFormChecker {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            date: '',
            time: 0,
            name: this.props.user ? this.props.user.name : '',
            phone: this.props.user ? this.props.user.phone : '',
            serviceType: this.props.match.params.name ? this.props.match.params.name : 'choose service',
        }

        this.onClickContainer = this.onClickContainer.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onClickBook = this.onClickBook.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
    }

    componentDidMount() {
        // console.log(this.props)
        const list = JSON.parse( localStorage.getItem('appointments') );
        this.setState({
            list: list,
            date: list[0].date
        })
    }

    componentDidUpdate() {
        // console.log(this.props)
        const newState = {}
        if ( this.props.user && this.props.user.phone !== this.state.phone) {
            newState.phone = this.props.user.phone;
        }
        if ( this.props.user && this.props.user.name !== this.state.name) {
            newState.name = this.props.user.name;
        }
        // console.log('newState--->', newState)
        if (newState.phone) {
            this.setState(newState)
        }
    }

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
                    className={className}>

                    {this.month[date.getMonth()]} {date.getDate()}
                </p>
            )
        })
    }

    daySchedule() {
        // console.log(this.state.list[])
        const dayId = this.state.list.findIndex( (el) => {
            return el.date === this.state.date
        })
        // console.log(dayId)
        if (dayId !== -1) {
            const response = [];
            for (let key in this.state.list[dayId].appointments) {
                // console.log(key)
                if (this.state.list[dayId].appointments[key] === 0) {
                    const lassName = this.state.time === key ? 
                            'px-s appointment_item appointment_item-active' : 
                            'px-s appointment_item'; 
                    response.push(<p className={lassName} key={key} data-schedule={key}>{key}</p>)
                }
            }
            // console.log(response.length)
            return response.length > 0 ? response : <p className='appointment_item appointment_item-active'>There is no time available this day. Sorry.</p> ;
        }
    }

    onClickContainer(ev) {
        if (ev.target.classList.contains('appointment_item')) {
            // console.log(ev.target.parentElement.id)
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

    formCheck() {
        // console.log(!!this.state.date)
        return !!this.state.date && 
                !!this.state.time && 
                this.state.phone.length === this.minLen.phone &&
                this.state.serviceType !== 'choose service';
    }

    onClickBook() {
        console.log('book');

        const date = this.state.date;
        const time = this.state.time;
        // console.log(date, time)
        const schedule = JSON.parse( localStorage.getItem('appointments') );
        
        const dayId = schedule.findIndex( (el) => {
            return el.date === date;
        });
        
        if (dayId !== -1) {
            const scheduleDay = schedule[dayId]
            if (time in scheduleDay.appointments && scheduleDay.appointments[time] === 0) {

                scheduleDay.appointments[time] = {
                    id: this.props.user ? this.props.user.id : 0,
                    name: this.state.name,
                    phone: this.state.phone,
                    serviceType: this.state.serviceType
                }
                // console.log(scheduleDay.appointments[time])
                // console.log(schedule)
                localStorage.setItem('appointments', JSON.stringify(schedule))
                // console.log(this.props)
                this.setState({
                    list: schedule.slice(),
                    date: date,
                    time: 0
                });

                this.showMessage(date, time)
            }
        }
    }

    showMessage(date, time) {
        const month = this.monthFull[new Date(date).getMonth()];
        const day = new Date(date).getDate();

        document.querySelector('#message').classList.remove('transparent');
        document.querySelector('#message').classList.add('message-valid');
        document.querySelector('#message').innerText = `we are wiating for you on ${day}th of ${month} at ${time}`; 
    }

    onChangeService(ev) {
        // console.log(ev.target.value)
        this.setState({[ev.target.id]: ev.target.value})
    }

    render() {
        const serviceType = this.props.match.params.name ? this.props.match.params.name : '';
        // console.log(serviceType)
        console.log(this.state)
        // console.log(this.props)
        // console.log(this.formCheck())

        const bookButtonClassName = this.formCheck() ? 'form_button' : 'form_button form_button-disabled';
        const formClassName = this.props.user ? 'login_form user_login_form' : 'login_form user_login_form login_form-phone'
        return (
            <>
            <div className='container pt-xxxl'>
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

                    {this.props.user ? null : 
                        <>
                        <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                        <input onInput={this.onInput} id='phone' className='form_input' type="text"/>
                        </>
                    }
                    <ServiceSelect onChangeService={this.onChangeService} activeService={serviceType} />
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

class ServiceSelect extends React.Component {
    constructor(props) {
        super(props);
        this.services = {
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
        // this.keys = Object.keys(this.service)
    }

    render() {
        // console.log(this.props.activeService)
        const {onChangeService} = this.props
        // console.log(onChangeService)
        return (
            <>
            <label className='form_label' htmlFor='phone'>Choose a service</label>
            <select className='form_input' id='serviceType' onChange={onChangeService} defaultValue={this.props.activeService}>
                <option className='input_options'>choose service</option>
                {Object.keys(this.services).map( (el) => {
                    return <option className='input_options' key={el} value={el}>{this.services[el].name}</option>
                })}
            </select>
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