import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, logOut } from '../../../actions/userActions';
import './AppNavbar.css'

class AppNavbar extends Component {
    state = {
        isAuthenticated: false,
        // name: 'Бумеранг не запущен'
        // users: this.state
    };
    componentDidMount() {
        this.props.getUsers();
        this.props.logOut()
    }
    // updateData = () => {
    //     this.setState({  isAuthenticated: true })
    //   }
    
    render() {
        const { auth, username } = this.props;
        const { users } = this.props;
        const { isAuthenticated } = this.state
        // users.map(user=>{(user.auth===true)?console.log(user):null})
        // console.log(users.map(user=>{(user.auth===true)?user:null}))
        return (
            <nav className="navbar">
                {/* <div className="container"> */}
                {/* <div className="top-nav"> */}
                <Link to="/" className="brand">
                    <h1>BARBER SHOP</h1>
                </Link>
    
                {/* </div> */}
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
                    {/* {username} */}
                    </Link>
                        <li className="nav-item link" onClick={() => {this.props.logOut(username);this.props.updateData(false)}}>
                        {/* <li className="link"> */}
                                    Log out
                                {/* </li> */}
                        </li> 
                        </div>
                        ) : <Link to="/login" className="link">
                        Log in/Sign up
                    </Link>}
                    </ul>
                    {/* <hr className="hr-bottom"/> */}
                {/* </div>   */}
            </nav>

        )
    }
}

const mapStateToProps = state => ({
    users: state.user.users
  });
  

export default connect(mapStateToProps,{ getUsers, logOut })(AppNavbar);