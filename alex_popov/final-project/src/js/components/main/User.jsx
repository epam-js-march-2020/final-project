import React from 'react';

import UserInformation from './UserInformation';
import Footer from '../Footer/Footer';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

class User extends React.Component {

    render() {
        return (
            <>
            <div className="container_main">
                <UserInformation />
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
})

// const actionsMap = (dispatch) => ({
//     activate: () => dispatch(activate()),
//     login: (user) => dispatch(login(user))
//   });

export default connect(propsMap, actionsMap)( User );