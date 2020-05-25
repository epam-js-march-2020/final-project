import React from 'react';
import facebook from '../../../img/social/facebook.png';
import twitter from '../../../img/social/twitter.png'
import Logo from '../Logo'



// const SocialMediaLinks = () => {
//     return (
//         <div className='footer_social'>
//             <a href='https://www.facebook.com/thebarbersden1/' className='px-s' >
//                 <img className='footer_socialIcon' alt='facebook' src={facebook} />
//             </a>
//             <a href='https://twitter.com/thebarbersden1' className='px-s' >
//                 <img className='footer_socialIcon' alt='twitter' src={twitter} />
//             </a>
//         </div>
//     )
// }

const SocialIcon = ({ link, source, altname }) => (
    <a href={link} className='px-s' >
        <img className='footer_socialIcon' alt={altname} src={source} />
    </a>
)

const Footer = ({footerClassName}) => {
    // console.log(footerClassName)
    return (
        <footer className={footerClassName}>
            <div className='container flex fd-column ai-center'>
                <div className='footer' ></div>
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

// const Footer = ({footerClassName}) => {
//     // console.log(footerClassName)
//     return (
//         <footer className={footerClassName}>
//             <div className='container flex fd-column ai-center'>
//                 <Logo logoClassName={'footer_logo logo-white'} />
//                 <p className='py-m'>33 High Street, Huntingdon, Cambs. PE293AQ</p>
//                 <p className='pb-m'>01480 458334</p>
//                 <SocialMediaLinks />
//             </div>
//         </footer>
//     )
// };

export default Footer;