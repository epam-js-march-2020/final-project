import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Textinput from '../TextInput/TextInput';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import {addGuest} from '../../../actions/guestActions'
import { addUserService } from '../../../actions/userActions'
import './Booking.css'

class Booking extends Component {
    state = {
        id:'',
        guestName: '',
        email: '',
        mobile: '',
        service: ''
    };
    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        const { auth } = this.props;
        if(auth) {
            const { service } = this.state;
            const { addUserService } =  this.props;
            const newService = {
                id:uuid(),
                service
            }
            addUserService(newService);
            alert('You have successfully booked a service' )
            this.setState({ id:'', service: ''})
        } else {
            const { guestName, mobile, email, service } = this.state;
            const { addGuest, title, selected } = this.props;
            const newGuest = {
                    id: uuid(),
                    guestName,
                    email,
                    mobile,
                    service
            }
            if(selected){newGuest.service=title}
              addGuest(newGuest);
              alert('You have successfully booked a service' )
                this.setState({
                    id:'',
                    guestName: '',
                    email: '',
                    mobile: '',
                    service: ''
                });
        }    
        
    }
    render() {
        const { auth, selected, title } = this.props
        const {  guestName, mobile, email, service } = this.state;
        return (
            <div className="box">
                <h2>Booking</h2>
                <form className="inputs" onSubmit={this.onSubmit} >
                    {auth ? null:
                        <div>
                           <Textinput 
                                name="guestName"
                                placeholder = 'Enter Your name'
                                type = 'text'
                                title = 'Name:'
                                value = {guestName}
                                onChange = {this.onChange}/>
                            <Textinput 
                                name = "mobile"
                                placeholder = 'Format: 8-333-333-33-33'
                                type = 'tel'
                                title = 'Your Mobile:'
                                value = { mobile }
                                onChange = {this.onChange}/>
                            <Textinput 
                                name="email"
                                placeholder = 'Enter Email'
                                type = 'email'
                                title = 'Email:'
                                value = {email}
                                onChange = {this.onChange}/> 
                        </div>
                    }
                {selected?(
                    <Textinput 
                    name="service"
                    type = 'text'
                    value = {title}
                    onChange = {this.onChange}
                   /> 
                ):(
                <div className="select-serv">
                    <span className="label">Service: </span>
                    <select className="input" value={service} name="service" onChange={this.onChange}>
                    <option>Select service:</option>
                    <option value="HAIRCUT">HAIRCUT</option>
                    <option value="BEARD && MOUSTACHE TRIMS">BEARD && MOUSTACHE TRIMS</option>
                    <option value="STRAIGHT RAZOR SHAVE">STRAIGHT RAZOR SHAVE</option>
                    <option value="LONGER/ONE HOUR CUT">LONGER/ONE HOUR CUT</option>
                    <option value="HAIRCUT AND SHAVE COMBO">HAIRCUT AND SHAVE COMBO</option>
                    </select>
                </div>
                )}
                <div>
                    <input type="submit" value='Booking' className="btn-book"/>
                </div>
                
            </form>
            </div>
        )
    }
}

export default connect(null, {addGuest, addUserService})(Booking)