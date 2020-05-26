import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from './LoginIcon';
import BurgerMenu from './BurgerMenu';

const Navigation = () => (
    <nav className="header-links">
        <BurgerMenu />

        <div id='header_mobileMenu' className='header_mainNav'>
            <NavLink 
                activeClassName='header_link-active' 
                className='header_link' 
                to='/'
                isActive={ (match, location) => {
                    return location.pathname === '/';
                }}
            >
                Main
            </NavLink>

            <NavLink 
                activeClassName='header_link-active' 
                className='header_link' 
                to='/services'
                isActive={ (match, location) => {
                    return location.pathname.indexOf('/services') !== -1;
                }}
            >
                services
            </NavLink>

            <NavLink 
                activeClassName='header_link-active' 
                className='header_link' 
                to='/appointment'
            >
                Booking
            </NavLink>

            <NavLink 
                activeClassName='header_link-active' 
                className='header_link' 
                to='/contacts'
            >
                contacts
            </NavLink>
        </div>

        <NavLink className='header-link' to='/user' >
                <LoginIcon />
        </NavLink>
    </nav>
)

export default Navigation;