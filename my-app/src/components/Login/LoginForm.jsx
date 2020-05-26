import React from 'react';
import Button from "../Utils/Button";
import LinkButton from "../Utils/LinkButton";
import { Redirect } from 'react-router-dom';

function LoginForm({isLoggedIn, onLogin, onLabelEmailChange}) {
    if(isLoggedIn) {
        return <Redirect to='/profile' />
    }

    return (
        <form className='form' onSubmit={onLogin}>
            <ul className='form__list'>
                <li className='form__item'>
                    <label className='form__text' htmlFor='userEmail'>Email:</label>
                    <input className='form__input' type='email' id='userEmail' onChange={onLabelEmailChange} placeholder='Email:' required/>
                </li>
                <li className='form__item'>
                    <label className='form__text' htmlFor='pass'>Password:</label>
                    <input className='form__input' type='password' id='pass' placeholder='Password:' required/>
                </li>
            </ul>
            <div className='form__button-container'>
                <Button type={'submit'} buttonText={'Log In'}/>
                <LinkButton path='/registration' buttonText={'Create new account'}/>
            </div>
        </form>
    );
}

export default LoginForm;