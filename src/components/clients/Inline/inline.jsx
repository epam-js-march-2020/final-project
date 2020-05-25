import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserService } from '../../../actions/userActions'

class inline extends Component {
    render() {
        const { service } = this.props.item;
        const { deleteUserService } =this.props
        return (
            <li className='serv-name'>
                <span>{service}</span>
                <button className="btn-cancel" onClick={()=>{deleteUserService(service)}}>Cancel service</button>          
            </li>
        )
    }
}

export default connect(null, { deleteUserService })(inline)
