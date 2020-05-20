import React from 'react';
import WithFormChecker from './WithFormChecker';
import Footer from '../Footer/Footer'

import {connect} from 'react-redux';


class Appointment extends WithFormChecker {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            date: '',
            time: 0,
            phone: this.props.user ? this.props.user.phone : '',
            name: this.props.user ? this.props.user.name : ''
        }

        this.month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // console.log(this.props)
        this.onClickContainer = this.onClickContainer.bind(this);
        this.onInput = this.onInput.bind(this)
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
        if (this.props.user && this.props.user.phone !== this.state.phone) {
            this.setState({
                phone: this.props.user.phone,
                name: this.props.user.name
            })
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
            return response;
        }
        
        return 'there is no available time this day'
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
        return !!this.state.date && 
                !!this.state.time && 
                this.state.phone.length === this.minLen.phone && 
                !!this.state.name
    }

    onClickBook() {
        console.log('book')
    }

    render() {
        console.log(this.state)
        console.log(this.formCheck())

        const bookButtonClassName = this.formCheck() ? 'form_button' : 'form_button form_button-disabled';
        const formClassName = this.props.user ? 'login_form user_login_form' : 'login_form user_login_form login_form-phone'
        return (
            <>
            <div className='container pt-xxxl'>
                <h2>Make an appointment</h2>
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

                    <label htmlFor='name'>Name {this.minLen.name} characters min, max - {this.len.name} </label>
                    <input onInput={this.onInput} id='name' className='form_input' type="text"/>
                    </>
                    }
                            
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

function FormInput ({ name, handler, message }) {
    return (
        <>
            <label htmlFor={name}>{message}</label>
            <input onInput={handler} id={name} className='form_input' type="text"/>
        </>
    )
}

const propsMap = (user) => (
    user
)

export default connect(propsMap)( Appointment );