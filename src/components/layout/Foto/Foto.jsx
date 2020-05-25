import React, { Component } from 'react'
import './Foto.css'
class Foto extends Component {
    render() {
        return (
            // <div className="foto-img">
                <img className="foto-img" src={require('./1387.jpg')}/>
            // </div>
        )
    }
}

export default Foto
