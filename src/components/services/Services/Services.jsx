import React, { Component } from 'react';
import Logo from '../../layout/Logo/Logo';
import Service from '../Service/Service';
import { connect } from 'react-redux';
import { getServices } from '../../../actions/serviceActions'
import './Services.css'

class Services extends Component {
    componentDidMount() {
        this.props.getServices();
    }
    
    render() {
        const { services } = this.props;
        return (
            <div  className="home">
                <div className="services">
                    <Logo />
                    <ul className="service">
                        <h1>Services</h1>
                        {services.map(service =>(
                        <Service key={ service.id } 
                                service={ service }
                                />
                        ))}
                    </ul>
                </div>
            </div>  
        )
    }

}

const mapStateToProps = (state) => ({
    services: state.service.services
})

export default connect(mapStateToProps, {  getServices })(Services);
