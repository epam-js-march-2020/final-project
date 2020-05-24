import React from 'react';





export default class Home extends React.Component  {
    render() {
        return (
            <section className='homepage'>
                <div className='homepage__wrapper'>
                    <h1 className='homepage__title'>Barbershop 'REAL Men'</h1>
                    <h2 className='homepage__subtitle'>Since 1985</h2>               
                    <div className='homepage__description'> 
                        <p className='homepage__text homepage__text--main'>Barbershop with your character</p>
                        <p className='homepage__text homepage__text--description'>
                        <span>* we have everything which are required for a real man: the atmosphere of brutality and men's spirit,</span> 
                        <span>  professionalism of barbers and preservation of european traditions of barbering, as well as also</span> 
                        </p>
                    </div>
                </div>
            </section>

        )
    }
}





