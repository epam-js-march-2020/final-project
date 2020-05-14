import React from 'react';
import facebook from '../../../img/social/facebook.png';
import twitter from '../../../img/social/twitter.png'
import Logo from '../Logo'



const SocialMediaLinks = () => {
    return (
        <div className='pt-l'>
            <a href='https://www.facebook.com/thebarbersden1/' className='px-xxl' ><img alt='facebook' src={facebook} /></a>
            <a href='https://twitter.com/thebarbersden1' className='px-xxl' ><img alt='twitter' src={twitter} /></a>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className='footer footer-dark'>
            <div className='container flex fd-column ai-center'>
                <Logo logoClassName={'footer-logo logo-white'} />
                <p className='py-m'>33 High Street, Huntingdon, Cambs. PE293AQ</p>
                <p className='pb-m'>01480 458334</p>
                <SocialMediaLinks />
            </div>
        </footer>
    )
};

export default Footer;