import React from 'react';
import logo from './logo.png';
import './App.css';
import './index.scss';

function Icon(props) {
  return (
    <i className={props.icon}></i>
  )
}

function App() {
  return (
    <div className="App body">
      <header className='header--fixed container--flex'>
        <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
            <li className="nav_link"><a><Icon icon='fas fa-home mg-l--15'/><span className='mg-l-5'>Home</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Services</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-user mg-l--15'/><span className='mg-l-5'>Profile</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-sign-in-alt mg-l--15'/><span className='mg-l-5'>Log In</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-user-plus mg-l--15'/><span className='mg-l-5'>Sign Up</span></a></li>
          </ul>
      </nav>
      </header>
      <main>
        <div className = "container--flex wrap--wrap">
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>
          <img className="logo" src={logo}></img>

        </div>
      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;
