import React from 'react';
import WithFormChecker from './WithFormChecker';

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

        this.onInput = this.onInput.bind(this);
        this.onClickLogOut = this.onClickLogOut.bind(this);
        this.onClickChangeInformation = this.onClickChangeInformation.bind(this);
    }

    onClickLogOut() {
        this.props.logout();
        document.cookie = `session=; expires=-1`;
    }

    valueChacker(value, parametrName, isUnique = false) {

        if (value === this.props.user[parametrName]) {
            this.messageRender('#message', `you are using this ${parametrName}`, true);
            return false
        } 

        if (isUnique) {
            const users = JSON.parse( localStorage.getItem('users') );
            const used = users.findIndex( (el) => {
                return el[parametrName] === value;
            })
            console.log(used)
            if (used !== -1) {
                this.messageRender('#message', `this ${parametrName} is used`, false)
                return false
            }
        }

        return true;
    }

    loadInformation(id, users, name, phone, pass) {
        const userId = users.findIndex( (el) => {
            return el.id === id
        });
        
        const newInformation = {
            ...users[userId],
            name: name ? name : this.props.user.name,
            phone: phone ? phone : this.props.user.phone,
            pass: pass ? pass : this.props.user.pass,
            appointments: users[userId].appointments.slice()
        }

        users.splice(userId, 1, newInformation);
        
        localStorage.setItem('users', JSON.stringify(users));
        this.props.login(newInformation);
    }

    onClickChangeInformation() {

        if ( this.formCheck() ) {
            const {id, name, phone, pass} = this.state;
            const isInformationValid = this.valueChacker(name, 'name') && 
                                        this.valueChacker(phone, 'phone', true) && 
                                        this.valueChacker(pass, 'pass');
            
            document.querySelector('#message').classList.remove('message-valid', 'message-invalid');

            
            
            if (isInformationValid) {
                const users = JSON.parse( localStorage.getItem('users') );
                this.loadInformation(id, users, name, phone, pass)
                this.messageRender('#message', 'information changed', true);
                this.fromCleaner();
            }
        }
    }

    fromCleaner() {
        document.querySelector('#phone').value = '';
        document.querySelector('#pass').value = '';
        document.querySelector('#name').value = '';

        this.setState({
            name: '',
            pass: '',
            phone: ''
        })

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
        // console.log(this.props.user)
        const changeButtonClassName = this.formCheck() ? 'form_button' : 'form_button form_button-disabled';

        return (
            <div className='login_form user_login_form login_form-phone'>
                        
                <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                <input onInput={this.onInput} placeholder={this.props.user.phone} id='phone' className='form_input' type="text"/>
        
                <label htmlFor='pass'>Password 5 characters min, max - 15</label>
                <input onInput={this.onInput} id='pass' className='form_input' type="password"/>

                <label htmlFor='name'>Name {this.minLen.name} characters min, max - {this.len.name} </label>
                <input onInput={this.onInput} placeholder={this.props.user.name} id='name' className='form_input' type="text"/>
                        
                <div className='form_buttonsContainer'>
                    <button disabled={!this.formCheck()} id='changeInformation' onClick={this.onClickChangeInformation} className={changeButtonClassName} >Change</button>
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