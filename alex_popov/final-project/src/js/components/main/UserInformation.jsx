import React from 'react';
import WithFormChecker from './WithFormChecker';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class UserInformation extends WithFormChecker {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            name: '',
            pass: '',
            phone: '',
            appoinments: this.props.user ? this.props.user.appointments.slice() : []
        }

        this.onInput = this.onInput.bind(this);
        this.onClickLogOut = this.onClickLogOut.bind(this);
        this.onClickChangeInformation = this.onClickChangeInformation.bind(this);
        this.onClickAppointmentsList = this.onClickAppointmentsList.bind(this);
    }

    componentDidUpdate() {
        // console.log('didupt')
        // if (this.state.appoinments.length !== this.props.user.appoinments.length) {
        //     this.setState({appoinments: this.props.user.appoinments.slice()})
        // }
    }

    onClickLogOut() {
        this.props.logout();
        document.cookie = `session=; expires=-1`;
    }

    valueChacker(value, parametrName, isUnique = false) {

        if (value === this.props.user[parametrName]) {
            this.messageRender('#message', `you are using this ${parametrName}`, true);
            return false
        } 

        if (isUnique) {
            const users = JSON.parse( localStorage.getItem('users') );
            const used = users.findIndex( (el) => {
                return el[parametrName] === value;
            })
            console.log(used)
            if (used !== -1) {
                this.messageRender('#message', `this ${parametrName} is used`, false)
                return false
            }
        }

        return true;
    }

    loadInformation(id, users, name, phone, pass) {
        const userId = users.findIndex( (el) => {
            return el.id === id
        });
        
        const newInformation = {
            ...users[userId],
            name: name ? name : this.props.user.name,
            phone: phone ? phone : this.props.user.phone,
            pass: pass ? pass : this.props.user.pass,
            appointments: users[userId].appointments.slice()
        }

        users.splice(userId, 1, newInformation);
        
        localStorage.setItem('users', JSON.stringify(users));
        this.props.login(newInformation);
    }

    onClickChangeInformation() {

        if ( this.formCheck() ) {
            const {id, name, phone, pass} = this.state;
            const isInformationValid = this.valueChacker(name, 'name') && 
                                        this.valueChacker(phone, 'phone', true) && 
                                        this.valueChacker(pass, 'pass');
            
            document.querySelector('#message').classList.remove('message-valid', 'message-invalid');

            
            
            if (isInformationValid) {
                const users = JSON.parse( localStorage.getItem('users') );
                this.loadInformation(id, users, name, phone, pass)
                this.messageRender('#message', 'information changed', true);
                this.fromCleaner();
            }
        }
    }

    fromCleaner() {
        document.querySelector('#phone').value = '';
        document.querySelector('#pass').value = '';
        document.querySelector('#name').value = '';

        this.setState({
            name: '',
            pass: '',
            phone: ''
        })

    }

    formCheck() {
        if (this.state.phone === '' && this.state.name === '' && this.state.pass === '') {
            return false;
        } else {
            return this.elCheck('pass') && this.elCheck('name') && this.elCheck('phone');
        }
    }

    elCheck(el) {
        if( this.state[el] !== '' && this.state[el].length < this.minLen[el]) {
            return false;
        }
        return true;
    }

    getAppointments() {
        // console.log(this.state.appoinments.slice())
        const appointments = this.state.appoinments.slice()
        if (appointments.length > 0) {
            appointments.sort((a,b) => (a.date.localeCompare(b.date)))
            console.log(appointments)
            return appointments.map( (el) => {
                const dateObj = new Date(el.date)
                // console.log(dateObj)
                const month = dateObj.getMonth()
                const date = dateObj.getDate()
                const time = dateObj.getHours()
                // console.log(month, date, time)
                return (
                    <div key={dateObj} className='appointments_item'>
                        <div className="appointments_information">
                            <h3 className='appoints_header'>the {date} of {this.monthFull[month]}</h3>
                            <p className='appointments_day'>{time} hours</p>
                        </div>
                        <CloseIcon />
                    </div>
                )
            })
        }
        return null;
    }

    onClickAppointmentsList(ev) {
        console.log('asdff')
        console.log(ev.target)
    }


    render() {
        const appointments = this.getAppointments()
        console.log(appointments)
        // console.log(this.state)
        // console.log(this.props)
        const changeButtonClassName = this.formCheck() ? 'form_button' : 'form_button form_button-disabled';

        return (
            <>
            <div className='login_form user_login_form login_form-phone'>
                        
                <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                <input onInput={this.onInput} placeholder={this.props.user.phone} id='phone' className='form_input' type="text"/>
        
                <label htmlFor='pass'>Password 5 characters min, max - 15</label>
                <input onInput={this.onInput} id='pass' className='form_input' type="password"/>

                <label htmlFor='name'>Name {this.minLen.name} characters min, max - {this.len.name} </label>
                <input onInput={this.onInput} placeholder={this.props.user.name} id='name' className='form_input' type="text"/>
                        
                <div className='form_buttonsContainer'>
                    <button disabled={!this.formCheck()} id='changeInformation' onClick={this.onClickChangeInformation} className={changeButtonClassName} >Change</button>
                    <button id='logout' onClick={this.onClickLogOut} className='form_button' >Log out</button>
                </div>
                <p id='message' className="message transparent">example</p>
            </div>
            <div id='appointmentsList' onClick={this.onClickAppointmentsList} className='userInformation_appointments'>
                <h2>You booked:</h2>
                {
                    appointments ? appointments : null
                }
            </div>
            </>
        )
    }
}

function CloseIcon() {
    return (
        <div className='delete_icon'>
            <svg fill="white"
                xmlns="http://www.w3.org/2000/svg" 
                height="24" 
                viewBox="0 0 24 24" 
                width="24"
            >
            <path 
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path 
                d="M0 0h24v24H0z"  
                fill="none"
            />
            </svg>
        </div>
    )
}

const propsMap = (user) => (
    user
);

const actionsMap = (dispatch) =>({
    logout: () => dispatch(actions.logOut()),
    login: (user) =>dispatch(actions.login(user))
});

export default connect(propsMap, actionsMap)( UserInformation );