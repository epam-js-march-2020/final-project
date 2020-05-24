import React from 'react';
import {serviceList}  from './serviceList';
import { Link } from 'react-router-dom'


export default  class Services extends React.Component {
    render() {
        return (
           <section className='services'>
               <div className='services__wrapper'>
                    <h1 className='services__title'>Services:</h1>
                    <ul className='services__list'>
                        { serviceList.map(service => {
                            return (
                            <li className='services__item' key={service.title} >
                                <Link to='/profile'>
                                    <img className='services__img' src={service.url} alt={service.title} />
                                    <p className='services__name'>{service.title}</p>
                                    <p className='services__price'>{service.price}</p>
                                    <p className='services__booking services__name'>lets book!</p>
                                </Link>
                            </li>
                        )
                            })
                        }
                    </ul>
            </div>
            </section>
        )
    }
}


