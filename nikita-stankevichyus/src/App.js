import React from 'react';
import './App.css';
import './index.scss';

import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { Link } from 'react-router-dom';

import { NavBar } from './components/nav_bar.js';
import { HomePage } from './components/home_page.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { SignUp } from './components/sign_up.js';
import { LogIn } from './components/login.js';
import { AddService } from './components/add_service.js';
import { ServicePage } from './components/service_page.js';


class App extends React.Component {
  

  render() {
    return (
      <div className="App body">
        {/* Modal fade that is shown "behind" modal windows during interaction */}
        <div 
          className={this.props.modals.fadeOn ? 
                    'modal_fade modal_fade_trick' 
                  : 'modal_fade'}>
        </div>
        
        {/* Sign up modal window */}
        <SignUp 
          modals = {this.props.modals}
          outModals = {this.props.outModals}
        />

        {/* Log in modal window */}
        <LogIn
          logIn = {this.props.logIn}
          modals = {this.props.modals}
          outModals = {this.props.outModals}
        />

        {/* Service adding modal window */}
        <AddService 
          toAddService = {this.props.toAddService}
          outModals = {this.props.outModals}
          addService = {this.props.addService}
          addGuestService = {this.props.addGuestService}
          modals = {this.props.modals}
          navigation = {this.props.navigation}
          user = {this.props.user}
        />

        {/* Top element for '#home' anchor */}
        <div id = 'home'></div>

        <header 
          className= {'header header--fixed container--flex' 
                      + (this.props.navigation.barShown ? '' 
                      : this.props.user.logged ?
                        ' header--hidden--logged'
                      : ' header--hidden')}>

          {/* Horizontal responsive navigation bar */}
          <NavBar 
            user = {this.props.user} 
            toHome = {this.props.toHome}
            toProfile = {this.props.toProfile}
            toServices = {this.props.toServices}
            toSignUp = {this.props.toSignUp}
            toLogIn = {this.props.toLogIn}
            hideBar = {this.props.hideBar}
            showBar = {this.props.showBar}
            navigation = {this.props.navigation}
          />
        </header>

        <main className="main">
          
          <Switch>

              <Route path='/home'>
                <HomePage />
              </Route>
        
            {
              // Profile is accessable only if user is logged
              this.props.user.loged ?
              <Route path='/profile'>
                <Profile 
                  user = {this.props.user}
                  modals = {this.props.modals}
                  deleteService = {this.props.deleteService}
                  changeName = {this.props.changeName}
                  changeSecondName = {this.props.changeSecondName}
                  changeEmail = {this.props.changeEmail}
                  toHome = {this.props.toHome}
                  toChangeName = {this.props.toChangeName}
                  toChangeSecondName = {this.props.toChangeSecondName}
                  toChangeEmail = {this.props.toChangeEmail}
                  outModals = {this.props.outModals}
                  logOut = {this.props.logOut}               
                />
              </Route>
              : null
            }
            
         

              {/* Services list page */}
              <Route path = '/services'>
                <Services 
                  addService = {this.props.toAddService}
                  toService = {this.props.toService}
                  user = {this.props.user}
                />
              </Route>
  
              {/* ServicePage page */}
              <Route path = {'/service_'+this.props.navigation.bufferService.name}>
                <ServicePage
                  navigation = {this.props.navigation}
                  user = {this.props.user}
                  toAddService = {this.props.toAddService}
                />
              </Route>
        
        
          <Redirect from='/' to='/home' />
        </Switch>
      </main>
      
      <footer className = 'footer'>
        <span className = 'text-color-muted mg-b-5 mg-l-5'>Stankevichyus Nikita, React Project. 2020</span>
      </footer>
    </div>
  );
  }
}

export default withRouter(App);
