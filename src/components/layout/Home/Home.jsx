import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Booking from '../Booking/Booking';
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
            </div>
        )
    }
}

export default Home;
