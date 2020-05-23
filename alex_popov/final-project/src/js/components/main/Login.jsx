import React from 'react';
import WithFormChecker from './WithFormChecker';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class Login extends WithFormChecker {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            pass: ''
        }

        this.onInput = this.onInput.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.formCheck =this.formCheck.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    formCheck(phone, pass) {
        if (phone.length === this.minLen.phone && pass.length >= this.minLen.pass ) {
            return true;
        }
        return false;
    }

    phoneChecker(arr, phone) {
        return arr.findIndex( (el) => {
            return el.phone ===  phone;
        })
    }

    signUp(phone, pass) {
        
        const users = JSON.parse( localStorage.getItem('users') );
        const userId = this.phoneChecker(users, phone);
        
        if ( userId === -1 ) {
        
            const id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
            const newUser = {
                id,
                phone,
                pass,
                name: '',
                appointments: [],
                code: this.cookier()
            };
            // console.log( newUser )
            this.props.login(newUser);
            users.push(newUser);
            
            localStorage.setItem('users', JSON.stringify(users));

        } else {
            this.messageRender('#message', 'this number have already used', false);
        }
    }

    login(phone, pass) {
        const users = JSON.parse( localStorage.getItem('users'));
        const userId = this.phoneChecker(users, phone);
        console.log(users[userId])
        if (userId !== -1) {
            if ( users[userId].pass === pass) {
                
                const user = {
                    ...users[userId],
                    // appointments: users[userId].appointments.slice(),
                    code: this.cookier(userId)
                }

                this.props.login(user)

            } else {
                this.messageRender('#message', 'password is wrong', false);
            }
        } else {
            this.messageRender('#message', 'phone number is wrong', false);
        }
        
    }

    cookier(userId) {
        const code = Date.now();
        const till = new Date(code + 3600000 ).toUTCString();

        document.cookie = `session=${code}; expires=${till}`;

        const users = JSON.parse( localStorage.getItem('users') );

        if (users[userId]) {
            users[userId].code = code;
        }

        localStorage.setItem( 'users', JSON.stringify(users));
        return code;
    }

    onClickButton(ev) {

        const phone = this.state.phone;
        const pass = this.state.pass;
        
        if (this.formCheck(phone, pass)) {
            
            if (ev.target.id === 'signup') {
                this.signUp(phone, pass);
            }
            if (ev.target.id === 'login') {
                this.login(phone, pass);
            }
        }
    }

    render() {
        
        return (
            <div className="container_login">
                <h2 className='login_header'>Join the Barbers Den Club</h2>
                <div className='login_form login_login_form login_form-phone'>
    
                    <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                    <input onInput={this.onInput} id='phone' className='form_input' type="text"/>
    
                    <label htmlFor='pass'>Password 5 characters min, max - 15</label>
                    <input onInput={this.onInput} id='pass' className='form_input' type="password"/>
    
                    <div className='form_buttonsContainer'>
                        <button id='login' onClick={this.onClickButton} className='form_button' >Sign In</button>
                        <button id='signup' onClick={this.onClickButton} className='form_button' >Sign Up</button>
                    </div>
                    <p id='message' className="message transparent">example</p>
                </div>
            </div>
        )
    }
    
}

const propsMap = ({user}) => (
    {user}
);

const actionMap = (dispatch) => ({
    login: (user) => dispatch(actions.login(user))
});

export default connect(propsMap, actionMap)( Login );