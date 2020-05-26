import React from 'react';
import {NavLink} from 'react-router-dom';

export class LinkButtonT extends React.Component {
    render(){
    return (
        <NavLink to={this.props.path} className='service__title'>{this.props.titleText}</NavLink>
    );
    }
}

export default LinkButtonT;