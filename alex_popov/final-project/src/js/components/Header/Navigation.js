import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from './LoginIcon';

const Navigation = () => {
    return (
      <nav className="header-links flex jc-between">
            <div>
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
                {/* <button id='activate'>activate</button> */}
            </div>
            <NavLink className='header-link' to='/user' >
                <LoginIcon />
            </NavLink>
      </nav>
    )
}

export default Navigation;