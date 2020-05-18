import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="container pt-xxxl">
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

const propsMap = ({user}) => (
    user
);

export default connect(propsMap)( User );