import React from 'react';
import HeaderLogo from './static/header_logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={HeaderLogo} alt='Header image' className='header_image' />
    </div>
  );
};

export default Header;
