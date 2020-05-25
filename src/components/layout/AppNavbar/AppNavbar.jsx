import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, logOut } from '../../../actions/userActions';
import './AppNavbar.css'

class AppNavbar extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.logOut()
    }
    
    render() {
        const { auth, username } = this.props;
        return (
            <nav className="navbar">
                <Link to="/" className="brand">
                    <h1>BARBER SHOP</h1>
                </Link>
                <hr/>
                    <ul className="navbar-nav">
                        <div className='info-links'>
                        <li className="nav-item">
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="link">
                                About
                            </Link>
                        </li>
                        </div>
                        
                        {auth ? (
                            <div className=" private-page">
                            <Link to="/account" className="link">
                                My account
                            </Link>
                            <li className="nav-item link" 
                                onClick={() => {this.props.logOut(username);
                                                this.props.updateData(false)}}>
                                Log out
                            </li> 
                            </div>
                            ) : <Link to="/login" className="link">
                                Log in/Sign up
                            </Link>
                        }
                    </ul>
            </nav>

        )
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});
  
export default connect(mapStateToProps,{ getUsers, logOut })(AppNavbar);
