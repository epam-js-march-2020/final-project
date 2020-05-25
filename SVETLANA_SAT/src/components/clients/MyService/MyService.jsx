import React, { Component } from 'react';
import Inline from '../Inline/inline';
import './MyService.css'

class MyService extends Component {
    render() {
        const { myServices } = this.props.user;
        return (
            <div className="serv-list">
               { myServices.map(item =>(
                        <Inline key={ item.id } 
                                item={ item }
                                />
                        ))}            
            </div>
        )
    }
}

export default MyService;
