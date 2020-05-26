import React from 'react';
import LinkButton from '../Utils/LinkButton';

class AboutItems extends React.Component {
    render(){
    return (
        <li className={'about__features-item about__features-item--'+this.props.name}>
            <div className='about__features-container'>
                <p className='about__features-title'>{this.props.text}</p>
                <LinkButton path={this.props.path} buttonText={this.props.buttonText} />
            </div>
        </li>
    );
    }
}

export default AboutItems;