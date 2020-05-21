import React from 'react';
import logo from '../images/logo.png';
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.jpg';
import work3 from '../images/work-3.jpg';

export function HomePage(props) {
  return (
    <div className = "container-fluid home">
          <section className = 'home_presentation row col-12 justify-content-center align-items-center align-content-center container'>
            <div className = 'row col-12 justify-content-center'>
              <h1 className = ''>Einheria Barbershop</h1>
            </div>
            <img id = 'contacts' className='logo row col-md-4 col-lg-3 col-6 mg-t-15' src={logo}></img>
            <div className='row col-12 mg-t-35'>
              <div className='col-12 col-lg-4 mg-b-15'>
                <h2>Adress</h2>
                <p className = 'mg-t-10'>Asgard, Valhalla</p>
              </div>
              <div className='col-12 col-lg-4 mg-b-15'>
                <h2>Telephone Number</h2>
                <p className = 'mg-t-10'>+0-123-456-78-99</p>
              </div>
              <div className='col-12 col-lg-4'>
                <h2>Work Hours</h2>
                <p className = 'mg-t-10'>00:00 — Ragnarok</p>
              </div>
            </div>
            
          </section>
          <section className = 'home_whyWe row col-12 align-content-evenly'>
            <div className = 'row col-12 align-content-start'>
              <div className = 'col-12 justify-content-center mg-t-35'>
                <h1 className = ''>Why we?</h1>
              </div>
              <p className = "col-12 mg-t-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className = 'row col-12 align-content-start justify-content-center'>
              <div className = 'col-12 mg-t-55'>
                <h1 id='examples' className = "">Our Work Examples</h1>
              </div>
              <div className = 'row col-12 mg-t-25 justify-content-around'>
                <div className = 'col-12 col-md-4 mg-b-5'><img src = {work1}></img></div>
                <div className = 'col-12 col-md-4 mg-b-5'><img  src = {work2}></img></div>
                <div className = 'col-12 col-md-4 mg-b-5'><img src = {work3}></img></div>
              </div>
            </div>
          </section>

    </div>
  )
}