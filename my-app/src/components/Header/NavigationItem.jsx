import React from 'react';
import {NavLink} from "react-router-dom";

class NavigationItem extends React.Component {
    render(){
    return (
        <li className='page-header__list-item'>
            <NavLink to={this.props.path} className='page-header__link'>{this.props.text}</NavLink>
        </li>
    );
}
}

export default NavigationItem;