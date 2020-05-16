import React from 'react';
import './App.css';
import './index.scss';
import 'bootstrap';
import { NavBar } from './components/nav_bar.js';
import { HomePage } from './components/home_page.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { Auth } from './components/auth.js';
import { AddService } from './components/add_service.js';


class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.navigation)
  return (
    <div className="App body">
      <div id = 'home'></div>
      <header className='header header--fixed container--flex'>
        <NavBar 
        loged = {this.props.loged} 
        logIn = {this.props.logIn} 
        toHome = {this.props.toHome}
        toProfile = {this.props.toProfile}
        toServices = {this.props.toServices}
        />
      </header>
      <main  className="main main--regular">  
        { this.props.navigation.atHome ? <HomePage />
          : this.props.navigation.atProfile ? <Profile />
          : <Services />
        }
      </main>
      <footer className = 'footer footer--fixed container--flex direction--row justify--start align--end items--end'>
        <span className = 'text-color-dark mg-b-5'>© EPAM, React Project. 2020</span>
      </footer>

    </div>
  );
  }
}

export default App;
