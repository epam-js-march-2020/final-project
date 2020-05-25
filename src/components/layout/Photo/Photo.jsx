import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
    render() {
        return (
            <img className="photo-img" alt="barbershop" src={require('./1387.jpg')}/>
        )
    }
}

export default Photo
