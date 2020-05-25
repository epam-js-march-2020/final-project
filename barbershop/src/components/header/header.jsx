import React from 'react';
import logo from './img/barberlogo.png'
import './header.css'
import Button from '../button/button'

const Header = ({buttonInfo, username}) => {

const buttons = buttonInfo.map(button =>  <Button key={button.id} name={button.name} link={button.linkTo} />);

    return ( 
    <div className="header">
        <img src={logo} alt="logo"/>
        {buttons}
    </div> );
}
 
export default Header;