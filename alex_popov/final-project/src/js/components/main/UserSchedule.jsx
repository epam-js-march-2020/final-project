import React from 'react';
import WithFormChecker from './WithFormChecker';
import AppointmentItem from './AppointmentItem.jsx';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

/**
 * renders the information about user's appointments
 */
class UserSchedule extends WithFormChecker {
    constructor(props) {
        super(props)
        //date, time , service fiealds show the information about the appointment
        // that user wants to delete
        //schedule - an array of users appointments
        // if the admin is logged contains all the appointments
        this.state = {
            id: this.props.user.id,
            date: '',
            time: '',
            service: '',
            schedule: []
        }

        this.onClickDeleteItem= this.onClickDeleteItem.bind(this);
        this.onClickDeleteModal = this.onClickDeleteModal.bind(this);
        this.onClickCancelModal = this.onClickCancelModal.bind(this);
    }

    /**
     * inserts the information in the store about user and appointments
     */
    componentDidMount() {
        const schedule = JSON.parse( localStorage.getItem('appointments') );
        const userAppointments = this.state.id === 1 ? 
            this.filterScheduleAdmin(schedule) : 
            this.filterSchedule(this.state.id, schedule);
        
        this.setState({schedule: userAppointments})
    }
    /**
     * filter the appointments for the admin
     * @param {array} list
     * @return {arra}
     */
    filterScheduleAdmin(list) {
        const response = [];

        list.forEach( (el) => {
            const hours = Object.keys(el.appointments)
            
            hours.forEach( (hour) => {
                if (el.appointments[hour] !== 0) {
                    response.push({
                        date: el.date,
                        hour: hour,
                        service: el.appointments[hour].serviceType,
                        phone: el.appointments[hour].phone
                    })
                }
            })
        });

        return response;
    }

    /**
     * filter the appointmentsfor an user
     * @param {number} id 
     * @param {array} list 
     * @return {array}
     */
    filterSchedule(id, list) {
        const response = [];

        list.forEach( (el) => {
            const hours = Object.keys(el.appointments)
            
            hours.forEach( (hour) => {
                if (el.appointments[hour].id === id) {
                    response.push({
                        date: el.date,
                        hour: hour,
                        service: el.appointments[hour].serviceType
                    })
                }
            })
        });

        return response;
    }

    /**
     * makes react components of the appointments
     * @return {array}
     */
    getAppointments() {
        const schedule = this.state.schedule.slice()
        if (schedule.length > 0) {
            
            return schedule.map( (el) => {
                const dateObj = new Date(el.date)
                
                const month = dateObj.getMonth()
                const date = dateObj.getDate()
                const time = el.hour

                return (
                    <AppointmentItem 
                        key={`${month}${date}${time}`} 
                        month={this.monthFull[month]} 
                        date={date} 
                        time={time} 
                        service={el.service}
                        phone={el.phone}
                        delHandle={this.onClickDeleteItem}
                        dayId={el.date}
                    />
                )

            })
        }
        return null;
    }

    /**
     * treatss clicks on the delte item 
     * insert information about delted item in the store 
     */
    onClickDeleteItem(ev) {
        const {date, time, service} =ev.currentTarget.dataset;
        
        this.setState({
            date,
            time,
            service
        })
    }

    /**
     * treats clicks on the delete button of the modal window
     * delte information about the appointment from the base
     */
    onClickDeleteModal() {
        const schedule = JSON.parse( localStorage.getItem('appointments') );

        const dayId = schedule.findIndex( (el) => {
            return el.date === this.state.date
        })

        if (dayId !== -1) {
            schedule[dayId].appointments[this.state.time] = 0;
            localStorage.setItem('appointments', JSON.stringify(schedule));
            this.setState({
                schedule: this.filterSchedule(this.state.id, schedule),
                time: '',
                date: '',
                service: ''
            })
        }
    }

    /**
     * treats click on the cancel button of modal window
     * insert default information in the state
     */
    onClickCancelModal() {
        console.log('cancel')
        this.setState({
            date: '',
            service: '',
            time: ''
        })
    }

    render() {
        const list = this.getAppointments();
        const month = this.state.date ? (new Date(this.state.date)).getMonth() : '';
        const date = this.state.date ? (new Date(this.state.date)).getDate() : '';

        if (list) {
            return (
                <>
                    <div id='appointmentsList' onClick={this.onClickAppointmentsList} className='userInformation_appointments'>
                        <h2>You booked:</h2>
                        {
                            list
                        }
                    </div>

                    { //renders the modal window if the state has information abolut a delte item
                        this.state.date ? 
                            <ModalConfirmation 
                                month={this.monthFull[month]} 
                                date={date} 
                                time={this.state.time} 
                                type={this.state.service} 
                                onCancel={this.onClickCancelModal} 
                                onDelte={this.onClickDeleteModal} 
                            /> 
                        : null}
                </>
            )
        } else {
            return null;
        }
        
    }
}

class ModalConfirmation extends React.Component {
    render() {
        const {month, date, time, type, onCancel, onDelte} = this.props
        return(
            <>
            <div className='deleteConfirmation_background'></div>
            <div className="deleteConfirmation_container">
                
                <div className='deleteconrifmation_info'>
                    <h3 className='delteConfirmation_header'>You are going to delete the appointment.</h3>
                    <p>{type}</p>
                    <p>the {date} of {month} at {time}</p>
                    <div className='delteConfirmation_buttons form_buttonsContainer'>
                        <button onClick={onDelte} className='form_button' >Delete</button>
                        <button onClick={onCancel} className='form_button' >Cancel</button>
                    </div>

                </div>
            </div>
            </>
        )
        
    }
}

const propsMap = (user) => (
    user
);

const actionsMap = (dispatch) =>({
    logout: () => dispatch(actions.logOut()),
    login: (user) =>dispatch(actions.login(user))
});

export default connect(propsMap, actionsMap)( UserSchedule );