import React from 'react';
import WithFormChecker from './WithFormChecker';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class UserSchedule extends WithFormChecker {
    constructor(props) {
        super(props)
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

    componentDidMount() {
        // console.log('did mount');
        const schedule = JSON.parse( localStorage.getItem('appointments') );
        // console.log(schedule)
        const userAppointments = this.filterSchedule(this.state.id, schedule);
        // console.log(userAppointments)
        this.setState({schedule: userAppointments})
    }

    filterSchedule(id, list) {
        // console.log(id, list)
        const response = [];
        list.forEach( (el) => {
            // console.log(el.appointments)
            const hours = Object.keys(el.appointments)
            // console.log(hours)
            hours.forEach( (hour) => {
                if (el.appointments[hour].id === id) {
                    // console.log(el.appointments[hour], el.date)
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

    getAppointments() {
        const schedule = this.state.schedule.slice()
        if (schedule.length > 0) {
            
            return schedule.map( (el) => {
                // console.log(el)
                const dateObj = new Date(el.date)
                // console.log(dateObj)
                const month = dateObj.getMonth()
                const date = dateObj.getDate()
                const time = el.hour
                // console.log(month, date, time)

                return (
                    <Appointment 
                        key={`${month}${date}${time}`} 
                        month={this.monthFull[month]} 
                        date={date} 
                        time={time} 
                        service={el.service}
                        delHandle={this.onClickDeleteItem}
                        dayId={el.date}
                    />
                )

            })
        }
        return null;
    }

    onClickDeleteItem(ev) {
        // console.log('asdff')
        // console.log(ev.currentTarget.dataset)
        const {date, time, service} =ev.currentTarget.dataset;
        // console.log(date, time, service)
        this.setState({
            date,
            time,
            service
        })

        // const schedule = JSON.parse( localStorage.getItem('appointments') );
        // console.log(schedule)
        // const dayId = schedule.findIndex( (el) => {
        //     return el.date === date
        // })
        // console.log(schedule[dayId].appointments[time])

    }

    onClickDeleteModal() {
        // console.log("delte")

        const schedule = JSON.parse( localStorage.getItem('appointments') );
        console.log(schedule)
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
        // console.log(schedule[dayId].appointments[this.state.time])
    }

    onClickCancelModal() {
        console.log('cancel')
        this.setState({
            date: '',
            service: '',
            time: ''
        })
    }

    render() {
        // console.log(this.props)
        console.log(this.state)
        const list = this.getAppointments();
        const month = this.state.date ? (new Date(this.state.date)).getMonth() : '';
        const date = this.state.date ? (new Date(this.state.date)).getDate() : '';
        console.log(month)
        // console.log(list)
        if (list) {
            return (
                <>
                <div id='appointmentsList' onClick={this.onClickAppointmentsList} className='userInformation_appointments'>
                    <h2>You booked:</h2>
                    {
                        list
                    }
                </div>
                {
                    this.state.date ? 
                        <DeleteConfirmation 
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

class DeleteConfirmation extends React.Component {
    render() {
        const {month, date, time, type, onCancel, onDelte} = this.props
        return(
            <>
            <div className='deleteConfirmation_background'></div>
            <div className="deleteConfirmation_container">
                
                <div className='deleteconrifmation_info'>
                    <h3 className='delteConfirmation_header'>You are roing to delete your appointment.</h3>
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

function Appointment({month, date, time, service, delHandle, dayId}) {
    return (
        <div key={`${month}${date}${time}`} className='appointments_item'>

            <div className="appointments_information">
                <h3 className='appoints_header'>the {date} of {month} at {time}:00</h3>
                {/* <p className='appointments_day'>{time} hours</p> */}
                <p className='appointments_day'>Service type: {service}</p>
            </div>

            <div 
                onClick={delHandle} 
                className='delete_icon'
                data-date={dayId}
                data-time={time}
                data-service={service}
            >
                <DelIcon />
            </div>

        </div>
    )
}

function DelIcon() {
    return (
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
    )
}

const propsMap = (user) => (
    user
);

const actionsMap = (dispatch) =>({
    logout: () => dispatch(actions.logOut()),
    login: (user) =>dispatch(actions.login(user))
});

export default connect(propsMap, actionsMap)( UserSchedule );