import React from 'react';

import Logo from '../Logo.jsx';
import Navigation from './Navigation.jsx';

class Header extends React.Component {
    /**
     * add events that used for show and hide menu on small screens
     * by clicks by the menu icon and the menu items
     */
    componentDidMount() {
        document.querySelector('#menuIcon').addEventListener('click', this.toggleMenu);
        document.querySelector('#header_mobileMenu').addEventListener('click', this.menuHider);
    }

    componentWillUnmount() {
        document.querySelector('#menuIcon').removeEventListener('click', this.toggleMenu);
        document.querySelector('#header_mobileMenu').removeEventListener('click', this.menuHider);
    }

    menuHider() {
        document.querySelector('#menuLogo').classList.remove('header_mobileMenu-active');
        document.querySelector('#header_mobileMenu').classList.remove('header_mainNav-mobile')
    }

    toggleMenu() {
        document.querySelector('#menuLogo').classList.toggle('header_mobileMenu-active');
        document.querySelector('#header_mobileMenu').classList.toggle('header_mainNav-mobile')
    }
    
    render() {
        return (
            <header className='header header-yellow'>
                <div className='header_container '>
                    <Logo logoClassName='header_logo logo-black'/>
                    <Navigation />
                </div>
            </header>
        );
    }
    
}

export default Header;