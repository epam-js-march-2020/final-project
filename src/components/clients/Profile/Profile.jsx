import React, { Component } from 'react';
import Textinput from '../../layout/TextInput/TextInput';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/userActions'
import './Profile.css'

class Profile extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        mobile: '',
        rePassword:''
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { userName, mobile, email, password, rePassword } = this.state;
        const { updateUser } = this.props;
        const userInfo = {
            userName, 
            email , 
            mobile, 
            password
        };
        
        if(password) {
            if(password=== rePassword) {
                updateUser(userInfo);
                this.setState({
                    userName: '',
                    email: '',
                    password: '',
                    mobile: '',
                    rePassword: ''
                });
            } else {
                alert('Please, check your password')
            }
        }else{ updateUser(userInfo);
            this.setState({
                userName: '',
                email: '',
                password: '',
                mobile: '',
                rePassword: ''
            });}      
    }

    render() {
        const { userName, password, mobile, email,rePassword } = this.state;
        const { user } = this.props;
        return (
            <div>
                <form className="edit-profile" onSubmit={this.onSubmit} >
                    <Textinput 
                        name="userName"
                        placeholder = 'Change name'
                        type = 'text'
                        title = {`Your user name: ${user.userName}`}
                        value = {userName}
                        onChange = {this.onChange}/>
                    <Textinput 
                        name = "mobile"
                        placeholder = 'Change Phone number'
                        type = 'tel'
                        title = { `Your phone number: ${user.mobile}` }
                        value = { mobile }
                        onChange = {this.onChange}/>
                    <Textinput 
                    name="email"
                        placeholder = 'Change Email'
                        type = 'email'
                        title = {`Your email: ${user.email}`}
                        value = {email}
                        onChange = {this.onChange}/>
                    <Textinput 
                        name = "password"
                        placeholder = 'Change Password'
                        type = 'rePassword'
                        title = { `Your password: ${user.password}` }
                        value = { password }
                        onChange = {this.onChange}/>
                    <Textinput  
                        name = "rePassword"
                        placeholder = 'Repeat Password'
                        type = 'password'
                        title = 'Repeat Password:'
                        value = { rePassword }
                        onChange = {this.onChange}
                        />
                        <input type="submit" value='Change Profile info' className="btn-change"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Profile)
