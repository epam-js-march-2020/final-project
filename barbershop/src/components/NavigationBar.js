import React from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NavigationBar = () => {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth') === 'true');
  console.log(isAuth);

  return (
    <div className="navigation_bar">
      <nav>
        <NavLink to="/home" className="nav_bar_link">
          Home
        </NavLink>
        <NavLink to="/services" className="nav_bar_link">
          Sevices
        </NavLink>
        <NavLink to="/profile" className="nav_bar_link">
          Profile
        </NavLink>
        <SignIn />
        <SignUp />
      </nav>
      {isAuth ? <p>true</p> : <p>false</p>}
    </div>
  );
};

export default NavigationBar;
