import React from 'react';
import logo from '../images/logo.png';
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.jpg';
import work3 from '../images/work-3.jpg';

export function HomePage(props) {

  const companyInfo = JSON.parse(localStorage.getItem('companyInfo'));

  return (
    <div className = "container-fluid home">
          <section className = 'home_presentation row col-12 justify-content-center align-items-center align-content-center container'>
            {/* Name, and logo */}
            <div className = 'row col-12 justify-content-center'>
              <h1 className = 'logo_text'>Einheria Barbershop</h1>
            </div>
            <img id = 'contacts' className='logo row col-md-4 col-lg-3 col-6 mg-t-15' alt = 'Company logotype' src={logo}></img>

            {/* Contacts */}
            <div className='row col-12 mg-t-35'>
              <div className='col-12 col-lg-4 mg-b-15'>

                {/* Adress */}
                <h2>Adress</h2>
                <p className = 'mg-t-10'>
                  {
                    companyInfo.adress
                  }
                </p>
              </div>
              <div className='col-12 col-lg-4 mg-b-15'>

                {/* Telephone number */}
                <h2>Telephone Number</h2>
                <p className = 'mg-t-10'>
                  {
                    companyInfo.telephone
                  }
                </p>
              </div>
              <div className='col-12 col-lg-4'>

                {/* Work hours */}
                <h2>Work Hours</h2>
                <p className = 'mg-t-10'>
                  {
                    companyInfo.workStart
                    + ' — ' +
                    companyInfo.workEnd
                  }
                </p>
              </div>
            </div>
            
          </section>

          {/* Why we section */}
          <section className = 'home_whyWe row col-12 align-content-evenly'>
            <div className = 'row col-12 align-content-start'>
              <div className = 'col-12 justify-content-center mg-t-35'>
                <h1 className = ''>Why we?</h1>
              </div>

              {/* Description */}
              <p className = "col-12 mg-t-15">
                {
                  companyInfo.whyWe
                }
              </p>
            </div>

            {/* Work examples photos */}
            <div className = 'row col-12 align-content-start justify-content-center'>
              <div className = 'col-12 mg-t-55'>
                <h1 id='examples' className = "">Our Work Examples</h1>
              </div>
              <div className = 'row col-12 mg-t-25 justify-content-around'>
                <div className = 'col-12 col-md-4 mg-b-5'>
                  <img alt = 'Work Example 1' src = {work1}></img>
                </div>
                <div className = 'col-12 col-md-4 mg-b-5'>
                  <img alt = 'Work Example 2' src = {work2}></img>
                </div>
                <div className = 'col-12 col-md-4 mg-b-5'>
                  <img alt = 'Work Example 3' src = {work3}></img>
                </div>
              </div>
            </div>
          </section>

    </div>
  )
}