import React from 'react';
import DelIcon from './DelIcon.jsx';

/**
 * render infiormation about an appointment
 */
const AppointmentItem = ({month, date, time, service, phone, delHandle, dayId}) => (
    <div key={`${month}${date}${time}`} className='appointments_item'>

        <div className="appointments_information">
            <h3 className='appoints_header'>
                the {date} of {month} at {time}:00
            </h3>
            <p className='appointments_day'>
                Service type: {service}
            </p>
                
            {
                phone ? 
                <p className='appointments_day'>client's phone: {phone}</p> : 
                null 
            }
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

export default AppointmentItem;