import React from 'react';
import { NavLink } from 'react-router-dom'; //компонент библиотеки
import logo from '../images/logo-1.png'


export default  class Header extends React.Component {
    render() {
     
        return (
            <header className='header'>
                <div className='header__logo'>
                <NavLink className='header__logo-link'  to='/home' exact>
                    <img className='header__logo-img' src={logo} alt='logo' />
                </NavLink>
                </div>
                <nav className='header__navbar navbar'>
                    <ul className='navbar__list'>
                    <li className='navbar__item'><NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/home' exact>HOME PAGE</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/about' >ABOUT US</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/services'>SERVICES</NavLink></li>
                    <li className='navbar__item'><NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/profile'>PROFILE</NavLink></li>
               
                    </ul>
                </nav>
            </header>
        )
    }
}


//<NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/home' exact>Home Page</NavLink>
//  <li className='navbar__item'><NavLink className='navbar__link' activeClassName='navbar__link-active'  to='/profile'>PROFILE-test</NavLink></li>
