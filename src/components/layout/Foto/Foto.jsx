import React, { Component } from 'react'
import './Foto.css'
class Foto extends Component {
    render() {
        return (
            <img className="foto-img" alt="barbershop" src={require('./1387.jpg')}/>
        )
    }
}

export default Foto
