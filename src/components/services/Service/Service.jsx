import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

class Service extends Component {
    render() {
        const { name, title } = this.props.service;
        return (
            <Link to={ `/services/${name}` } className="item">
                <li className="serv-item">{ title }</li>
            </Link>
        )
    }
}

export default Service;
