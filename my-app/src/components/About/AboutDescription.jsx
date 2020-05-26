import React from 'react';

class AboutDescription extends React.Component {
    render(){
    return (
        <div className='about__description'>
            <div className='about__description-container'>
                <span className='about__description-name'>«BarberBob»</span>
                <p className='about__description-text'>Cutting your own hair is disgusting</p>
                <p className='about__description-text'>Thankfully we can cut it for you</p>
                <p className='about__description-text'>Yes, price is not justified at all </p>
            </div>
        </div>
    );
    }
}

export default AboutDescription;