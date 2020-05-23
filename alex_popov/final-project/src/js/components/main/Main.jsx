import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Services from './Services';
import Contacts from './Contacts';
import Login from './Login';
import User from './User';
import Appointment from './Appointment'
import NotFound from './NotFound';

import { connect } from 'react-redux';


class Main extends React.Component {
    render() {
        // console.log(this.props.user)
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