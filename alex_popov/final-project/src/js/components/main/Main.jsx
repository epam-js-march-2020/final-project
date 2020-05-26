import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.jsx';
import Services from './Services.jsx';
import Contacts from './Contacts.jsx';
import Login from './Login.jsx';
import User from './User.jsx';
import Appointment from './Appointment.jsx'
import NotFound from './NotFound.jsx';

import { connect } from 'react-redux';

/**
 * main elemetns that treat routes
 */
class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/'  component={Home} />

                    <Route exact path='/services' component={Services} />
                    <Route path='/services/:name' component={Services} />
                    <Route exact path='/contacts' component={Contacts} />

                    <Route exact path='/user'  render={() => (
                        this.props.user ? (<User />) : (<Redirect to='/login' />)
                    )} /> 

                    <Route path='/login' render={() => (
                        this.props.user ? (<Redirect to='/user' />) : (<Login />)
                    )} />
                    
                    <Route exact path='/appointment' component={Appointment} />
                    <Route path='/appointment/:name' component={Appointment} />

                    <Route path='/404' component={NotFound} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        )
    }
}

const propMap = ({user}) => ( {user} )

export default connect(propMap)(Main)