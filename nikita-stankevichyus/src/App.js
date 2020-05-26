import React from 'react';
import './App.css';
import './index.scss';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import { NavBar } from './components/nav_bar.js';
import { HomePage } from './components/home_page.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { SignUp } from './components/sign_up.js';
import { LogIn } from './components/login.js';
import { AddService } from './components/add_service.js';
import { ServicePage } from './components/service_page.js';


function App(props){
  


    document.onkeydown = (event) => {
      if (event.key === "Escape") { 
          props.outModals();
     }
    };
    

    return (
      <div className="App body">
        {/* Modal fade that is shown "behind" modal windows during interaction */}
        <div 
          className={props.modals.fadeOn ? 
                    'modal_fade modal_fade_trick' 
                  : 'modal_fade'}>
        </div>
        
        {/* Sign up modal window */}
        <SignUp 
          modals = {props.modals}
          outModals = {props.outModals}
        />

        {/* Log in modal window */}
        <LogIn
          logIn = {props.logIn}
          modals = {props.modals}
          outModals = {props.outModals}
        />

        {/* Service adding modal window */}
        <AddService 
          toAddService = {props.toAddService}
          outModals = {props.outModals}
          addService = {props.addService}
          addGuestService = {props.addGuestService}
          modals = {props.modals}
          navigation = {props.navigation}
          user = {props.user}
        />

        {/* Top element for '#home' anchor */}
        <div id = 'home'></div>

        <header 
          className= {'header header--fixed container--flex' 
                      + (props.navigation.barShown ? '' 
                      : props.user.logged ?
                        ' header--hidden--logged'
                      : ' header--hidden')}>

          {/* Horizontal responsive navigation bar */}
          <NavBar 
            user = {props.user} 
            toHome = {props.toHome}
            toProfile = {props.toProfile}
            toServices = {props.toServices}
            toSignUp = {props.toSignUp}
            toLogIn = {props.toLogIn}
            hideBar = {props.hideBar}
            showBar = {props.showBar}
            navigation = {props.navigation}
          />
        </header>

        <main className="main">

          <Switch>

              <Route path='/home'>
                <HomePage />
              </Route>
        
            {
              // Profile is accessable only if user is logged
              props.user.loged ?
              <Route path='/profile'>
                <Profile 
                  user = {props.user}
                  modals = {props.modals}
                  deleteService = {props.deleteService}
                  changeName = {props.changeName}
                  changeSecondName = {props.changeSecondName}
                  changeEmail = {props.changeEmail}
                  toHome = {props.toHome}
                  toChangeName = {props.toChangeName}
                  toChangeSecondName = {props.toChangeSecondName}
                  toChangeEmail = {props.toChangeEmail}
                  outModals = {props.outModals}
                  logOut = {props.logOut}               
                />
              </Route>
              : null
            }
            
         

              {/* Services list page */}
              <Route path = '/services'>
                <Services 
                  addService = {props.toAddService}
                  toService = {props.toService}
                  user = {props.user}
                />
              </Route>
  
              {/* ServicePage page */}
              <Route path = {'/service_'+props.navigation.bufferService.name}>
                <ServicePage
                  navigation = {props.navigation}
                  user = {props.user}
                  toAddService = {props.toAddService}
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

export default withRouter(App);
