import React from 'react';

import UserInformation from './UserInformation';
import UserSchedule from './UserSchedule';
import Footer from '../Footer/Footer';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

class User extends React.Component {

    render() {
        console.log( JSON.parse( localStorage.getItem('users')))
        return (
            <>
            <div className="container_main">
                <UserInformation />
                <UserSchedule />
            </div>
            <Footer footerClassName='footer footer-dark' />
            </>
        )
    }
}

const propsMap = (user) => (
    user
);

const actionsMap = (dispatch) =>({
    logout: () => dispatch(actions.logOut())
});

export default connect(propsMap, actionsMap)( User );