import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            pass: ''
        }

        this.regExps = {
            phone: /\D/g,
            pass: /\*/
        }

        this.len = {
            phone: 10,
            pass: 15
        }
        this.minLen = {
            phone: 10,
            pass: 5
        }

        this.onInput = this.onInput.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.formCheck =this.formCheck.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    formCheck(phone, pass) {
        if (phone.length === this.minLen.phone && pass.length >= this.minLen.pass ) {
            return true
        }
        return false;
    }

    onInput(ev) {
        const id = ev.target.id; 
        let val = ev.target.value.replace(this.regExps[id], '')

        if (val.length > this.len[id]) {
            val = val.slice(0, this.len[id])
        }
        ev.target.value = val;
    
        if (val.length < this.minLen[id]) {
            ev.target.previousSibling.classList.add('form_label-invalid')
            ev.target.classList.add('form_input-invalid')
        } else {
            ev.target.previousSibling.classList.remove('form_label-invalid')
            ev.target.classList.remove('form_input-invalid')
        }

        if ( val !== '' && val !== this.state[id]) {
            // console.log('change')
            this.setState({[id]: val})
        }

    }

    phoneChecker(arr, phone) {
        return arr.findIndex( (el) => {
            return el.phone ===  phone
        })
    }

    signUp(phone, pass) {
        // console.log('up')
        const users = JSON.parse( localStorage.getItem('users') );
        const userId = this.phoneChecker(users, phone);
        // console.log( users.length )
        if ( userId === -1 ) {
            // console.log('add')
            const id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
            const newUser = {
                id,
                phone,
                pass,
                name: undefined,
                appointments: [],
                code: this.cookier()
            };
            // console.log(Array.isArray( newUser.apointmets ) )
            this.props.login(newUser)
            users.push(newUser)
            
            localStorage.setItem('users', JSON.stringify(users))
            // setTimeout( ()=> {this.props.history.push('/user')}, 300)
            // setTimeout( ()=> { console.log(this.props)}, 300)
        } else (
            console.log('this number have already used')
        )
    }

    login(phone, pass) {
        const users = JSON.parse( localStorage.getItem('users'));
        const userId = this.phoneChecker(users, phone);
        console.log(this.props)
        if (userId !== -1) {
            if ( users[userId].pass === pass) {
                // console.log('regregreg')
                // console.log( Array.isArray( users[userId].apintments ) ) 
                const user = {
                    ... users[userId],
                    appointments: users[userId].appointments.slice(),
                    code: this.cookier()
                }
                // console.log(user)
                console.log(this.props)
                this.props.login(user)
                
                // setTimeout( ()=> {this.props.history.push('/user')}, 300);
                // setTimeout( () => (<Redirect to='/user' />), 10000)
                // return <Redirect to='/user' />
                // this.cookier()
            } else {
                console.log('password is wrong')
            }
        } else {
            console.log('we do not have such a number')
        }
        
    }

    cookier() {
        const code = Date.now();
        const till = new Date(code + 3600000 ).toUTCString();
        console.log(code)
        document.cookie = `session=${code}; expires=${till}`;
        // console.log( typeof document.cookie);
        return code;
        
        // +1 день от текущей даты
        // let date = new Date(Date.now() + 86400e3);
        // date = date.toUTCString();
        // document.cookie = "user=John; expires=" + date;
    }

    onClickButton(ev) {
        // console.log('click')
        // console.log(document.querySelector('#'))
        const phone = this.state.phone;
        const pass = this.state.pass;
        // console.log( this.formCheck( phone, pass) )
        if (this.formCheck(phone, pass)) {
            // console.log(ev.target.id)
            if (ev.target.id === 'signup') {
                this.signUp(phone, pass)
            }
            if (ev.target.id === 'login') {
                // console.log('login')
                this.login(phone, pass)
            }
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="container_login">
                <h2 className='login_header'>Join the Barbers Den Club</h2>
                <div className='login_form'>
    
                    <label className='form_label' htmlFor='phone'>Phone number 10 digits</label>
                    <input onInput={this.onInput} id='phone' className='form_input' type="text"/>
    
                    <label htmlFor='pass'>Password 5 characters min, max - 15</label>
                    <input onInput={this.onInput} id='pass' className='form_input' type="password"/>
    
                    <div className='form_buttonsContainer'>
                        <button id='login' onClick={this.onClickButton} className='form_button' >Sign In</button>
                        <button id='signup' onClick={this.onClickButton} className='form_button' >Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

// console.log(actions)

const propsMap = ({user}) => (
    {user}
);

const actionMap = (dispatch) => ({
    login: (user) => dispatch(actions.login(user))
});

export default connect(propsMap, actionMap)( Login );