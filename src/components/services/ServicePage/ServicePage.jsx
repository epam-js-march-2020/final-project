import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ServicePageFill from '../ServicePageFill/ServicePageFill'
import { getService } from '../../../actions/serviceActions';
import { getUserServices } from '../../../actions/userActions'

import './ServicePage.css'

class ServicePage extends Component {
    componentDidMount()  {
        const name = this.props.match.params.name
        this.props.getService(name);
        this.props.getUserServices()
    };
    
    render() {
        const { services, auth, myServices } = this.props;
        return (
            <div  className="home">
                <Link to="/services" className="arrow"><i className="fas fa-arrow-left"></i></Link>
                {
                services.map(service => 
                     {
                        if(service.show === true) {
                            return <ServicePageFill 
                            key = { service.id }
                            service = { service }
                            auth = { auth }
                            myServices = { myServices[0] }
                            />
                        }
                        return null
                    })
                }
                   {/* <Link to="/" className="btn">
                        Booking
                    </Link> */}
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    services: state.service.services,
    myServices: state.user.myServices
});

// console.log(ee)
// export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
export default connect(mapStateToProps, {  getService, getUserServices })( withRouter(ServicePage ));
// export default ServicePage
// 