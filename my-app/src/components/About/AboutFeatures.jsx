import React from 'react';
import FeatureElement from './AboutItems';

class AboutFeatures extends React.Component {
    render(){
    return (
        <ul className='about__features'>
            <FeatureElement name={'barber'} text={'Hair Style'} buttonText={'Add appointment'} path={'Add'}/>
            <FeatureElement name={'hair'} text={'Even you can have a beard'} buttonText={'Get a beard'} path={'Add'}/>
        </ul>
    );
    }
}

export default AboutFeatures;