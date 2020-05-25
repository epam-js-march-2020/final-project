import React, { Component } from 'react';
import './login.css';
import Cabinet from '../../cabinet/cabinet';
import {Link} from 'react-router-dom';

class LogIn extends Component {
    state = { 
        formSwitcher: true,
        validationMessage: '',
     }

switchFormHandler = (event) => {
    event.preventDefault();
    this.props.form_reset();
    this.setState({formSwitcher: !this.state.formSwitcher})
}


    render() { 
        return ( 
            <div className="signup">
  
            {
            this.props.logged ? (
            <div className="container">
           {this.props.image ? <img className='image' src={this.props.image} alt="avatar" /> : null}

            <div className="logged">
            <p>You successfully logged in,  {this.props.username}!</p>
            <div className="panel">
            <button onClick={this.props.logout}>Log out</button>
            <Link to="/settings"><button>Settings</button></Link>
            </div>
            </div>
            
            <Cabinet 
            readServices={this.props.readServices} 
            currentUserServices={this.props.currentUserServices} 
            deleteService = {this.props.deleteService}
            readBookings = {this.props.readBookings}
            addBooking = {this.props.addBooking}
            cancelBooking = {this.props.cancelBooking}
            currentUser = {this.props.currentUser}
            allUsers = {this.props.allUsers}

            />
            </div>
             ) : 
            
            <div>
            { this.state.formSwitcher ?
            <div className="i-have-account">
            <form >
            <h2 className="caliostro">Already have an account?</h2>
            <p className="validation">{this.props.validation_message}</p>
            <label>E-mail</label>
            <input onChange={this.props.change} value={this.props.email}  name='email' type="email" placeholder="Your email"/><br/>
            <label>Password</label>
            <input onChange={this.props.change} value={this.props.password} name="password" type="password" placeholder="Your password"/><br/>
            <button onClick={this.switchFormHandler}>Register new account</button>
            <button onClick={this.props.signin}>Log in!</button>
            </form>
            </div> :
            
            <div className="new-account">
             <form>
                  <h2 className="caliostro">Register to be our client:</h2>
                  <p className="validation">{this.props.validation_message}</p>
                  <label>Name</label>
                  <input onChange={this.props.change} value={this.props.username} name='name' type="text" placeholder="Enter your name"/><br/>
                  <label>E-mail</label>
                  <input onChange={this.props.change} value={this.props.email} name='email' type="email" placeholder="Your email"/><br/>
                  <label>Password</label>
                  <input onChange={this.props.change} value={this.props.password} name="password" type="password" placeholder="Your password"/><br/>
                  <button onClick={this.switchFormHandler}>I have an account</button>
                  <button onClick={this.props.submit}>Register!</button>
                  </form>
                  </div>
                  }
                  </div>
            }
                     
            </div>
         );

         }
}
 
export default LogIn;
