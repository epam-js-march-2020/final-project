import React, { Component } from 'react';
import Logo from '../Logo'
import Booking from '../Booking/Booking';
import  './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="lead">
                {/* <div className="lead w-75"> */}
                {/*  */}
                <Logo />
                <Booking />
                {/* </div> */}
                
            </div>
        )
    }
}

export default Header;