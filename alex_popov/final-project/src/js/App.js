import React from 'react';

import { connect } from 'react-redux';
import { login } from './actions/actions';

import Header from './components/Header/Header.jsx';
import Main from './components/main/Main.jsx';

class App extends React.Component {

    componentDidMount() {
        if (!this.props.user) {
            this.loginer()
        }
    }

    /**
     * after a user have logged the application create a code 
     * that is stored in the database. the dame code is stored
     * in coockes for one hour. If there is the coded the app 
     * automaticaly make the user logged
     */
    
    loginer() {
        const cookie = document.cookie;
        const code = cookie.split('=')[1];
        
        const users = JSON.parse( localStorage.getItem('users') )

        const userId = users.findIndex( (el) => {
            return String( el.code ) ===  String( code )
        })
        
        if(userId !== -1) {
            this.props.login(users[userId])
        }
    }

    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        );
    }
}

const propsMap = ({user}) => ({
    user
});

const actionsMap = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(propsMap, actionsMap)(App);;