import React from 'react';
import WithFormChecker from './WithFormChecker';
// import Footer from '../Footer/Footer';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class UserInformation extends WithFormChecker {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            name: '',
            pass: '',
            phone: ''
        }

        this.regExps = {
            phone: /\D/g,
            pass: /\*/,
            name: /\*/
        }

        this.len = {
            phone: 10,
            pass: 15,
            name: 15
        }

        this.minLen = {
            phone: 10,
            pass: 5,
            name: 5
        }

        this.onInput = this.onInput.bind(this);
        this.onClickLogOut = this.onClickLogOut.bind(this);
        this.onClickChangeInformation = this.onClickChangeInformation.bind(this);
    }

    onClickLogOut() {
        this.props.logout();
        document.cookie = `session=; expires=-1`;
    }

    onClickChangeInformation() {

        if ( this.formCheck() ) {
            document.querySelector('#message').classList.remove('message-valid', 'message-invalid');

            const users = JSON.parse( localStorage.getItem('users') );
            const {id, name, phone, pass} = this.state;
            let isInformationValid = false;
            if (phone) {

                if (phone === this.props.user.phone) {
                    this.messageRender('#message', 'you are using this phone', false);
                    return;
                }

                const used = users.findIndex( (el) => {
                    return el.phone === phone;
                })
                console.log(used)
                if (used === -1) {
                    isInformationValid = true;
                } else {
                    this.messageRender('#message', 'this phone number used', false)
                    return
                }
            }

            if (name) {
                if (name === this.props.user.name) {
                    this.messageRender('#message', 'you are using this name', false);
                    return
                } else {
                    isInformationValid = true;
                }
            }

            if (pass) {
                if (pass === this.props.user.pass) {
                    this.messageRender('#message', 'you are using this pass', false);
                    return
                } else {
                    isInformationValid = true;
                }
            }

             if (isInformationValid) {
                console.log('change information')
                const userId = users.findIndex( (el) => {
                    return el.id === id
                });
                // console.log(userId)
                const newInformation = {
                    ...users[userId],
                    name: name ? name : this.props.user.name,
                    phone: phone ? phone : this.props.user.phone,
                    pass: pass ? pass : this.props.user.pass,
                    appointments: users[userId].appointments.slice()
                }

                // console.log(users)
                users.splice(userId, 1, newInformation);
                // console.log(users)
                localStorage.setItem('users', JSON.stringify(users));
                this.props.login(newInformation);

                this.messageRender('#message', 'information changed', true);
                this.fromCleaner();
            }
        }
    }

    fromCleaner() {
        document.querySelector('#phone').value = '';
        document.querySelector('#pass').value = '';
        document.querySelector('#name').value = '';

    }

    formCheck() {
        if (this.state.phone === '' && this.state.name === '' && this.state.pass === '') {
            return false;
        } else {
            return this.elCheck('pass') && this.elCheck('name') && this.elCheck('phone');
        }
    }

    elCheck(el) {
        if( this.state[el] !== '' && this.state[el].length < this.minLen[el]) {
            return false;
        }
        return true;
    }


    render() {
        console.log(this.props)
        const form = this.formCheck();
        const changeButtonClassName = form ? 'form_button' : 'form_button form_button-disabled' ; 
        return (
            <div className='login_form user_login_form login_form-phone'>
                        
                <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                <input onInput={this.onInput} placeholder={this.props.user.phone} id='phone' className='form_input' type="text"/>
        
                <label htmlFor='pass'>Password 5 characters min, max - 15</label>
                <input onInput={this.onInput} id='pass' className='form_input' type="password"/>

                <label htmlFor='name'>Name 5 characters min, max - 15</label>
                <input onInput={this.onInput} placeholder={this.props.user.name} id='name' className='form_input' type="text"/>
                        
                <div className='form_buttonsContainer'>
                    <button disabled={!form} id='changeInformation' onClick={this.onClickChangeInformation} className={changeButtonClassName} >Change</button>
                    <button id='logout' onClick={this.onClickLogOut} className='form_button' >Log out</button>
                </div>
                <p id='message' className="message transparent">example</p>
            </div>
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

export default connect(propsMap, actionsMap)( UserInformation );