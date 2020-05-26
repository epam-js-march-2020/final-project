import React from 'react';
import Button from '../Utils/Button';
import LinkButton from '../Utils/LinkButton';
import { Redirect } from 'react-router-dom';

export class Registration extends React.Component {
    onLabelNameChange = (e) => {
        this.setState({
            nameLabel: e.target.value
        })
    };
    onLabelEmailChange = (e) => {
        this.setState({
            emailLabel: e.target.value
        })
    };
    handleSubmit = ()=>{
        this.setLocalStorage();
        // localStorage.setState('userEmail', this.state.emailLabel);
        // localStorage.setState('userName', this.state.nameLabel);
        this.props.onReg({
            userEmail: this.state.emailLabel,
            userName: this.state.nameLabel
        });
    }; 
    setLocalStorage = function (){
        localStorage.setItem('userEmail',this.state.emailLabel);
        localStorage.setItem('userName',this.state.nameLabel);
        localStorage.setItem('isLoggedIn', true)
    }
    render() {
        if(this.props.isLoggedIn) {
            return <Redirect to='/profile' />
        }
    
        return(
            <form className='form' onSubmit={this.handleSubmit}>
                <ul className='form__list'>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='userRegName'>Name:</label>
                        <input className='form__input' type='text' placeholder='Name:' id='userRegName'onChange={this.onLabelNameChange} required minLength='3' maxLength='20'/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='regEmail'>Email:</label>
                        <input className='form__input' type='email'placeholder='Email:' id='regEmail' onChange={this.onLabelEmailChange} required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='pass'>Password:</label>
                        <input className='form__input'placeholder='Password:' type='password' id='pass' required/>
                    </li>
                </ul>
                <div className='form__button-container'>
                    <Button type={'submit'} buttonText={'Create'}/>
                    <LinkButton path='/login' buttonText={'Back'}/>
                </div>
            </form>
        );
    }
}

export default Registration;
