import React from 'react';
import './App.css';
import './index.scss';

import { NavBar } from './components/nav_bar.js';
import { HomePage } from './components/home_page.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { SignUp } from './components/sign_up.js';
import { LogIn } from './components/login.js';
import { AddService } from './components/add_service.js';
import { ServicePage } from './components/service_page.js';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.navigation)
  return (
    <div className="App body">

      <div 
        className={this.props.modals.fadeOn ? 
                  'modal_fade modal_fade_trick' 
                : 'modal_fade'}>

      </div>

      <SignUp 
        signUp = {this.props.modals.signUp}
        outModals = {this.props.outModals}
      />

      <LogIn
        makeLogIn = {this.props.logIn}
        logIn = {this.props.modals.logIn}
        outModals = {this.props.outModals}
      />

      <AddService 
        toAddService = {this.props.toAddService}
        outModals = {this.props.outModals}
        addService = {this.props.addService}
        addGuestService = {this.props.addGuestService}
        addingService = {this.props.modals.addService}
        bufferService = {this.props.navigation.bufferService}
        user = {this.props.user}
      />

      <div id = 'home'></div>
      <header className='header header--fixed container--flex'>
        <NavBar 
        loged = {this.props.user.loged} 
        toHome = {this.props.toHome}
        toProfile = {this.props.toProfile}
        toServices = {this.props.toServices}
        toSignUp = {this.props.toSignUp}
        toLogIn = {this.props.toLogIn}
        />
      </header>
      <main className="main">  
        { this.props.navigation.atHome ? <HomePage />
          : this.props.navigation.atProfile ? 
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
          : this.props.navigation.atServices ?
            <Services 
              addService = {this.props.toAddService}
              toService = {this.props.toService}
              user = {this.props.user}
            />
          : <ServicePage
              bufferService = {this.props.navigation.bufferService}
              user = {this.props.user}
              toAddService = {this.props.toAddService}
            />
        }
      </main>
      <footer className = ''>
        <span className = ''>© EPAM, React Project. 2020</span>
      </footer>

    </div>
  );
  }
}

export default App;
