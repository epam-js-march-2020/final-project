import React from 'react';

import SocialIcon from '../SocialIcon';
import Logo from '../Logo.jsx';

import facebook from '../../../img/social/facebook.png';
import twitter from '../../../img/social/twitter.png';

/**
 * as the footer can looks different it receves the class name
 */
const Footer = ({footerClassName}) => {
    return (
        <footer className={footerClassName}>
            <div className='container flex fd-column ai-center'>

                <Logo logoClassName={'footer_logo logo-white'} />
                <p className='py-m'>33 High Street, Huntingdon, Cambs. PE293AQ</p>
                <p className='pb-m'>01480 458334</p>

                <div className='footer_social'>
                    <SocialIcon 
                        link={'https://www.facebook.com/thebarbersden1/'} 
                        source={facebook}
                        altname='facebook'
                    />
                    <SocialIcon 
                        link={'https://twitter.com/thebarbersden1'} 
                        source={twitter}
                        altname='twitter'
                    />
                </div>
                
            </div>
        </footer>
    )
};

export default Footer;