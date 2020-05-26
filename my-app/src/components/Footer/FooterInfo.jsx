import React from 'react';

class FooterInfo extends React.Component {
    render(){
    return (
        <li className='page-footer__list-item'>
            <p className='page-footer__text'>{this.props.firstMessage}</p>
            <p className='page-footer__text'>{this.props.secondMessage}</p>
        </li>
    );
    }
}

export default FooterInfo;