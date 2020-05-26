import React from 'react';

const SocialIcon = ({ link, source, altname }) => (
    <a href={link} className='px-s' >
        <img className='footer_socialIcon' alt={altname} src={source} />
    </a>
);

export default SocialIcon;