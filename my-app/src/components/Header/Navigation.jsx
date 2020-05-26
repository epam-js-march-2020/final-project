import React, {Component} from 'react';
import NavigationItem from "./NavigationItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import logo from "../../img/personLogo.jpg"

class Navigation extends Component {
    render() {
        return (
            <nav className='page-header__navigation'>
                <ul className='page-header__list'>
                    <NavigationItem path={'/'} text={'Home'} />
                    <NavigationItem path={'/services'} text={'services'} />
                    <NavigationItem path={'/add'} text={'New appointment'} />
                    <NavigationItem path={'/list'} text={'Your Schedule'} />
                    <li className='page-header__list-item page-header__list-item--personal'>
                        <NavLink to='/login' className='page-header__link'>
                            {this.props.isLoggedIn ?
                                this.props.userName
                                :
                                <img src={logo} alt="logo" width="34" height="34" />
                            }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({isLoggedIn, userName}) => {
    return {
        isLoggedIn,
        userName
    };
};

export default connect(mapStateToProps)(Navigation);