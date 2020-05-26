import React from 'react';
import AboutDescription from './AboutDescription';
import AboutFeatures from './AboutFeatures';


class About extends React.Component {
    render(){
    return (
        <main className='page-main'>
            <section className='about'>
            <h1 className='about__title'>Regular Bob's new barbershop BarberBob</h1>
                <AboutDescription/>
                <h2 className='about__main-title'>Hair or no hair</h2>
                <AboutFeatures/>
                
            </section>
        </main>
    );
    }
}

export default About;