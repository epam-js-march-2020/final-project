import React, { Component } from 'react';
import Textinput from '../../layout/TextInput/TextInput';
import { Link } from 'react-router-dom';

class Form extends Component {
    render() {
        return (
            <div>
                
                < Textinput />
                < Textinput />
                < Textinput />
                < Textinput />
                < Textinput />
                <Link to="/" className="btn-book">
                    Booking
                </Link>
            </div>
        )
    }
}

export default Form
