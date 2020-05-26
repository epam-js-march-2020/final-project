import React from 'react';
import LinkButton from './LinkButton';
import { Redirect } from 'react-router-dom'

export class SubmitSuccess extends React.Component {
    onRedirect = () => {
        return <Redirect to='/list'/>;
    };
    render(){
    return (
        <div className='message'>
            <p>Success</p>
            <LinkButton path='/list' buttonText='Ok'/>
            {this.onRedirect()}
        </div>
    );
    }
}

export default SubmitSuccess;