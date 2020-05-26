import React from 'react';
import FooterInfo from "./FooterInfo";

class Footer extends React.Component {
    render(){
    return (
        <footer className='page-footer'>
            <ul className='page-footer__list'>
                <FooterInfo firstMessage={'City, street, 2'} secondMessage={'+1 999 333 22 11'}/>
                <FooterInfo firstMessage={"cutting your own hair is disgusting"} secondMessage={'open 9to5'} />
                
            </ul>
        </footer>
    );
    }
}

export default Footer;