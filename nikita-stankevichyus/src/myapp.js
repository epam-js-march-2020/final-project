import React from 'react';
import logo from './logo.png';
import work1 from './work-1.jpg';
import work2 from './work-2.jpg';
import work3 from './work-3.jpg';
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
      <div id = 'home'></div>
      <header className='header header--fixed container--flex'>
        <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
            <li className="nav_link"><a href="#home"><Icon icon='fas fa-home mg-l--15'/><span className='mg-l-5'>Home</span></a></li>
            <li className="nav_link"><a href='#contacts'><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Contacts</span></a></li>
            <li className="nav_link"><a href='#whyWe'><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Why We</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Services</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-user mg-l--15'/><span className='mg-l-5'>Profile</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-sign-in-alt mg-l--15'/><span className='mg-l-5'>Log In</span></a></li>
            <li className="nav_link"><a><Icon icon='fas fa-user-plus mg-l--15'/><span className='mg-l-5'>Sign Up</span></a></li>
          </ul>
      </nav>
      </header>
      <main  className="main main--regular">
        <div className = "main_content container--flex direction--column justify--between align-between items--between">
          <section id='contacts' className = "main_presentation presentation mg-t-35 container--flex justify--center align--start items--center direction--column">
            <h1>Einheria Barbershop</h1>
            <img className="logo mg-t-15" src={logo}></img>
            <div className='presentation_info info container--flex direction--row justify--evenly mg-t-35'>
              <div className='info_adress adress'>
                <h2>Adress</h2>
                <p className = 'mg-t-10'>Asgard, Valhalla</p>
              </div>
              <div className='info_number number'>
                <h2>Telephone Number</h2>
                <p className = 'mg-t-10'>+0-123-456-78-99</p>
              </div>
              <div className='info_hours hours'>
                <h2>Work Hours</h2>
                <p className = 'mg-t-10'>00:00 -- Ragnarok</p>
              </div>
            </div>
            
          </section>
          <section className = "main_whyWe whyWe container--flex justify-center align--center direction--column">
            <h1 id='whyWe' className = "mg-t-35">Why we?</h1>
            <p className = "mg-t-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className = "mg-t-45">Our Work Examples</h1>
            <div className = "whyWe_works mg-t-25 container--flex direction--row justify--around">
              <div><img className = "works_work work_1" src = {work1}></img></div>
              <div><img className = "works_work work_2" src = {work2}></img></div>
              <div><img className = "works_work work_3" src = {work3}></img></div>
            </div>
          </section>

        </div>
      </main>
      <footer className = 'footer footer--fixed container--flex direction--row justify--start align--end items--end'>
        <span className = 'text-color-dark mg-b-5'>© EPAM, React Project. 2020</span>
      </footer>

    </div>
  );
}

export default App;
