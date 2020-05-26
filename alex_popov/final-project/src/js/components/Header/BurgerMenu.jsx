import React from 'react';

/**
 * the icon used for renderind main menu on phones
 */
const BurgerMenu = () => (
    <div id='menuIcon' className='header_mobileMenu'>
        <svg 
            id='menuLogo' 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white" 
            width="30px" 
            height="30px"
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
    </div>
)

export default BurgerMenu;