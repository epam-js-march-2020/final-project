import React from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";
import logo from "../../img/randomLogo.png";


class Header extends React.Component {
    render(){
    return (
        <header className='page-header'>
            <NavLink to='/' className='page-header__logo-link'>
                <img src={logo} alt="logo" width="50" height="50" />
            </NavLink>
            <Navigation />
        </header>
    );
    }
}

export default Header;