import React, { Component } from 'react';
import'./makeAppointment.css';
// import moment from 'moment';


class MakeAppointment extends Component {

constructor(props) {
    super(props);
  
this.state = {
showAppointment: false,
// buttonName: 'Make appointment',
status: '',
showButton: true,
isSomeBooking: (this.props.readBookings().length  > 0 ? true : false),
showCancel: (this.props.readBookings().length  > 0 ? true : false),
buttonName:  this.props.readBookings().length  > 0 ? 'Change' : 'Make appointment'
    }
}


submitHandler = (props) => {
this.setState({status: ''})

if (this.state.showAppointment === false) {
    this.setState({showAppointment: true});
    return;
}

let date, time, master;

date = document.querySelector('input[type="date"]').value;
time = document.querySelector('select').value;
// let dateFormatted = moment(date).format("MMMM Do YYYY");

let dateTimeStamp = new Date(date).getTime()



if (!date) {
    this.setState({status: 'Choose the date'});
    return;
}


if (document.querySelector('input[type="radio"]:checked')) {
    master = document.querySelector('input[type="radio"]:checked').value;
}  else {
    this.setState({status: 'Choose your master'});
    return;
};


let bookingInfo = {date: dateTimeStamp, time, master};
let bookingInfoStringified = JSON.stringify(bookingInfo);
console.log('booking info stringified: ', bookingInfoStringified)



//Check if booking on the same date, time and master exists
let bookingCheck = false;

this.props.allUsers.map(item => {
   if(JSON.stringify(item.booking[0]) === bookingInfoStringified) {
       bookingCheck = true;
      } 
});

// console.log(bookingCheck);

if (bookingCheck) {
    this.setState({status: "Booking on same date/time already exists. Try another date/time or master"});
    return;
}

let timeStart=  +time.slice(6, -3)-1;

function meetingExpired ()  {

    if (Date.now()+3*3600000 > dateTimeStamp+(3600000*timeStart)) {
        console.log('date now: ', Date.now()+3*3600000, 'meeting start:', dateTimeStamp+3600000*timeStart);
        return true
    } else {console.log('date now: ', Date.now()+3*3600000, 'meeting start:', dateTimeStamp+3600000*timeStart);
    return false;
}
}


if (meetingExpired()) {
    this.setState({status: "Choose date/time in future please"});
    return;
}

this.props.addBooking(bookingInfo);
this.setState({
    showAppointment: false, 
    showButton: true,
    status: `Yohhoo! Booking created!`,
    showCancel: true,
    buttonName: "Change"
},
   
        );
        

}    

cancelHandler = () => {
    this.props.cancelBooking();
    this.setState({showCancel: false,
        status:  "Booking canceled",
        buttonName: "Make appointment",
        showAppointment: false
    });
    
}

render() {
    return (
<div className="container">
{this.state.showAppointment ? 

<div className="appointment">
<div className="date-time">
<p className="caliostro">Choose your Date:</p>
<form id="date">
<input type="date" name="calendar"/>
</form>
<p className="caliostro">Choose your Time:</p>
<select id="time" name="time">
<option value="10.00-11.00">10.00-11.00</option>
<option value="11.00-12.00">11.00-12.00</option>
<option value="12.00-13.00">12.00-13.00</option>
<option value="13.00-14.00">13.00-14.00</option>
<option value="14.00-15.00">14.00-15.00</option>
<option value="15.00-16.00">15.00-16.00</option>
<option value="16.00-17.00">16.00-17.00</option>
<option value="17.00-18.00">17.00-18.00</option>
<option value="18.00-19.00">18.00-19.00</option>
</select>
</div>

<form id="master">
  <p className="caliostro">Choose your Master:</p>
  <input type="radio" id="Mr. Hooks" name="master" value="Mr. Hooks"/>
  <label htmlFor="Mr. Hooks">Mr. Hooks</label><br/>
  <input type="radio" id="Mr. Redux" name="master" value="Mr. Redux"/>
  <label htmlFor="Mr. Redux">Mr. Redux</label><br/>
  <input type="radio" id="Mr. Webpack" name="master" value="Mr. Webpack"/>
  <label htmlFor="other">Mr. Webpack</label><br/>
  <input type="radio" id="Mr. Vanilla" name="master" value="Mr. Vanilla"/>
  <label htmlFor="Mr. Vanilla">Mr. Vanilla</label>
</form><br/>
</div> : null

}
<b><p className='status'>{this.state.status}</p></b>

 <div>
{this.state.showButton ? <button onClick={this.submitHandler}>{this.state.buttonName}</button> : null}
{/* {this.props.isSomeBooking ? <button onClick={this.cancelHandler}>Cancel</button>  : null} */}
{this.state.showCancel  ? <button onClick={this.cancelHandler}>Cancel</button> : null}

</div>

</div>
    )
}  
 
}
 
export default MakeAppointment;