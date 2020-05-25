import React, { Component } from 'react';
import Textinput from '../../layout/TextInput/TextInput';
import { addUser } from '../../../actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SignUp.css';
import uuid from 'react-uuid';

class SignUp extends Component {
    state = {
        id:'',
        userName: '',
        email: '',
        password: '',
        mobile: '',
        rePassword:'',
        auth: false,
        isSignedUp: false
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    onSubmit = e => {
        e.preventDefault();
        const { userName, mobile, email, password, rePassword, auth } = this.state;
        const { addUser } = this.props;
        const newUser = {
            id: uuid(),
            userName, 
            email , 
            mobile, 
            password,
            auth,
            myServices:[],
        };
        if(password === rePassword){
            addUser(newUser);
            this.setState({
                id:'',
                userName: '',
                email: '',
                password: '',
                mobile: '',
                auth: false,
                myServices:[],
                rePassword: '',
                isSignedUp: true
            });
        } else {
            alert('Please, check your password')
        }
    }

    render() {
        const {  userName, mobile, email, password, rePassword, isSignedUp } = this.state;
        return (
            <div className="signup">
               {isSignedUp ? ( 
                   <div>
                       <h3> You successfully signed up</h3>
                        <div>
                            <Link to="/login" className="link-item">
                                Go to the login page
                            </Link>
                         </div> 
                   </div>) :
                    <div>
                        <h2>Sign Up</h2>
                        <form className="inputs" onSubmit={this.onSubmit} >
                            <Textinput 
                                name="userName"
                                placeholder = 'Enter Your name'
                                type = 'text'
                                title = 'Name:'
                                value = {userName}
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
                            <Textinput 
                                name = "password"
                                placeholder = 'Enter Password'
                                type = 'password'
                                title = 'Password:'
                                value = { password }
                                onChange = {this.onChange}
                                />
                            <Textinput  
                                name = "rePassword"
                                placeholder = 'Repeat Password'
                                type = 'password'
                                title = 'Repeat Password:'
                                value = { rePassword }
                                onChange = {this.onChange}/>
                                <input type="submit" value='Create account' className="btn-signup"/>
                        </form>
                    </div>  
                }    
            </div>
        )
    }
}

export default connect(null, {addUser})(SignUp)
