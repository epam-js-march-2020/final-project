import React, { Component } from 'react';
import Booking from '../../layout/Booking/Booking';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import './ServicePageFill.css';
import { addUserService, deleteUserService } from '../../../actions/userActions'

class ServicePageFill extends Component {
    state = {
        showBooking: false,
        deleted: false
    };

    changeBooking = (value) => {
        this.setState({ showBooking: value});
    }

    render() {
        const { title, img, description } = this.props.service;
        const { showBooking, deleted } = this.state;
        const { auth, myServices, addUserService, deleteUserService } = this.props;
        return (
            <div>
                <h2 className="title">{ title }</h2>
                    <div className="description">
                        <div className="img">
                        <img src={ img } alt="service" className="photo"/>
                        </div>
                        <div className="desc-form">
                            <span className="descr">{ description }</span>

                            {auth? (
                            <div>
                                {myServices.some(item => item.service === title)? (
                                    <div>
                                        {deleted?   <div className="service-btn"
                                                    onClick={()=>{addUserService({id: uuid(), service: title}); 
                                                                    alert('You have successfully booked a service');
                                                                    this.setState({deleted: false})}}>
                                                                        Booking
                                                    </div>:(
                                                    <span className="canc-s">You are booked
                                                        <div className="canc-btn"
                                                            onClick={()=>{deleteUserService(title);
                                                                        this.setState({deleted: true})
                                                                    }}>
                                                            Cancel service
                                                        </div>
                                                    </span>
                                                    )
                                        }
                                    </div> 
                                ):  <div className="service-btn" 
                                         onClick={()=>{addUserService({id: uuid(), service: title}); 
                                                       alert('You have successfully booked a service');
                                                       this.setState({showBooking: this.state.showBooking})
                                                       }}>Booking
                                    </div>
                                }
                            </div>
                            
                        ):(
                            <div className="service-btn" onClick={() =>
                                this.setState({
                                    showBooking: !this.state.showBooking
                                })}>Booking
                            </div>  
                        )} 
                        </div>
                        <div style={showBooking ?{ display: 'flex'}:{ display:'none' }} className="modal-bkgd">
                            <div className="modal-content">
                                <div className="close" onClick={() => {
                                    this.setState({
                                        showBooking: !this.state.showBooking })  
                                    }} >×</div>
                                <Booking selected={true}
                                         title={title}
                                         changeBooking={this.changeBooking}
                                />
                            </div>     
                        </div>
                    </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    services: state.service.services
});

export default connect(mapStateToProps, { addUserService, deleteUserService })(ServicePageFill);
