import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{path: '/' , name: 'main'}, {path: '/services', name: 'services'}, {path: '/barbers', name: 'barbers'}, {path: '/contacts', name: 'contacts'}];

const Navigation = () => {
    return (
      <nav className="header-links flex jc-between">
            <div>
                {links.map( (el) => {
                    return <NavLink key={el.name} className='header-link px-xxl' to={el.path}>{el.name}</NavLink>
                })}
            </div>
            <NavLink className='header-link' to='/login' >log in</NavLink>
      </nav>
    )
}

export default Navigation;