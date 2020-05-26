import React from 'react';
import {NavLink} from "react-router-dom";

export class LinkButton extends React.Component {
    render(){
        return (
            <NavLink to={this.props.path} className='about__button button'>{this.props.buttonText}</NavLink>
        );
    }
}


export default LinkButton;