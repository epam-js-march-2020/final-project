import React, { Component } from 'react';
import Logo from '../Logo'
import Header from '../Header/Header';
import Booking from '../Booking/Booking';
import About from '../About/About';
// import Logo from '../Logo';
import './Home.css'

class Home extends Component {
    render() {
        const { auth } = this.props
        return (
            <div className="home">
                <div className="lead">
                    <Logo />
                    <Booking auth={auth}/>
                </div>
                
                {/* <Header /> */}
                {/* <About /> */}
            </div>
        )
    }
}

export default Home;
