import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <img src={require('./4.jpg')} alt="logo" className="scissors"/> 
            </div>
        )
    }
}
