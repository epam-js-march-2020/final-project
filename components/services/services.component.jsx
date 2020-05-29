import React from 'react';
import './services.css'

class Services extends React.Component {
  render() {
    return (
      <div className="services" id="services">
        <span className="titlenew"> Services</span>
        <div className="content ">
          <div className="content-left">
            <img className="background" src={window.location.origin + '/services.jpg'}/>
              
          </div>
          <div className="content-right">
            <div className="price">
              <div className="price-item">
              <button className="button">Book now</button> 
              </div>
              <div className="price-item">
                <span>
                  MEN'S HAIRCUT
                </span>
                <span>
                  $30 
                </span>
              </div> 
                <div className="price-item">
                <span>
                  MEN'S CLIPPER CUTTING
                </span>
                <span>
                  $20
                </span>
              </div> 
              <div className="price-item">
                <span>
                  BEARD TRIM
                </span>
                <span>
                  $20
                </span>
              </div> 
              <div className="price-item">
                <span>
                  SHAVING
                </span>
                <span>
                  $18
                </span>
              </div> 
              <div className="price-item">
                <span>
                  WAXING
                </span>
                <span>
                  $10
                </span>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;


