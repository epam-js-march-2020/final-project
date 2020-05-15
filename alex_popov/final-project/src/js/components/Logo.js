import React from 'react';
import logo from '../../img/logo.png';

const Logo = ({ logoClassName }) => {
    return (
        <img alt='logo' className={logoClassName} src={logo} />    
    )
}

export default Logo;