import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from './LoginIcon';

const Navigation = () => {
    return (
      <nav className="header-links">
            <div id='menuIcon' className='header_mobileMenu'>
                <svg id='menuLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </div>
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
                {/* <button id='activate'>activate</button> */}
            </div>
            <NavLink className='header-link' to='/user' >
                <LoginIcon />
            </NavLink>
      </nav>
    )
}

export default Navigation;