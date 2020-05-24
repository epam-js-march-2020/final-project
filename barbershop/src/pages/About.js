import React from 'react';


export default  class About extends React.Component {
    render() {
        return (
           <section className='about'>
               <div className='about__wrapper'>
                    <h1 className='about__title'>ABOUT US</h1>
                    <div className='about__description'> 
                        <p className='about__text about__text--main'> 'REAL Men' Barbershop</p>
                        <p className='about__text about__text--description'>
                        <span>'REAL Men' is not just a men's hairdresser. </span> 
                        <span>This is a place where you will be helped to find your own, unique style.</span>
                        <span>Men's haircuts and dangerous shaving are our profile, and we are sure that our barbers do this best of all. </span>
                        <span>As the famous Ralph Lauren once said: “Whatever your lifestyle, you must have your own style, your own world.” </span>
                        </p>
                    </div>
                </div>
           </section>
        )
    }
}