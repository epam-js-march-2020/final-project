import React from 'react';
import { NavLink } from 'react-router-dom';

// const links = [{path: '/' , name: 'main'}, {path: '/services', name: 'services'}, {path: '/barbers', name: 'barbers'}, {path: '/contacts', name: 'contacts'}];

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
                    to='/craft'
                >
                    craft
                </NavLink>
                <NavLink 
                    activeClassName='header_link-active' 
                    className='header_link' 
                    to='/contacts'
                >
                    contacts
                </NavLink>
            </div>
            <NavLink className='header-link' to='/login' >log in</NavLink>
      </nav>
    )
}

export default Navigation;