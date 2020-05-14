import React from 'react';

import Logo from '../Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='header header-yellow'>
            <div className='container flex ai-center'>
                <Logo logoClassName='header_logo logo-black'/>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;