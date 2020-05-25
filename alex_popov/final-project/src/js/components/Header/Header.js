import React from 'react';

import Logo from '../Logo';
import Navigation from './Navigation';

class Header extends React.Component {
    componentDidMount() {
        // console.log('did')
        document.querySelector('#menuIcon').addEventListener('click', this.toggleMenu)
        document.querySelector('#header_mobileMenu').addEventListener('click', this.menuHider)
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