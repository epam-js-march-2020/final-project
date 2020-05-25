import React, { Component } from 'react';
import './cabinet.css';
import MakeAppointment from '../makeAppointment/makeAppointment';
import './cabinet.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import AdminPanel from '../adminPanel/adminPanel'

class Cabinet extends Component {


render() {
let services = this.props.readServices();
let bookings = this.props.readBookings();

if (this.props.currentUser === 'admin@admin.com') {
return <AdminPanel allUsers={this.props.allUsers} />
}  


// console.log('services length', services.length);
let status;

if (services.length === 0) {
     status  = "Add some services";
} else {
     status = "Add more services";
}

let servicesResult = services.map((item, index) => 
(<div className="service-item" key={index} ><h3>{item}</h3>
<button id={item} onClick={(event) => {this.props.deleteService(event.target.id)}}>X</button></div>));

let bookingsResult  = bookings.map((item, index) => 

<div key={index}>
<h3>You have booking {moment(item.date).format('MMMM Do YYYY')} from {item.time} with {item.master}</h3>
</div>)

return (
          <div className="cabinet">
              {servicesResult}
              <Link to="/services"><button>{status}</button></Link>
          <h4>{bookingsResult}</h4>
          <MakeAppointment allUsers={this.props.allUsers} addBooking={this.props.addBooking} cancelBooking={this.props.cancelBooking} readBookings={this.props.readBookings}  />

     </div>
);     
}
}
 
export default Cabinet;