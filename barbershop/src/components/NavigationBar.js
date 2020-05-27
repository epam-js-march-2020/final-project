import React from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NavigationBar = (props) => {
  const [isAuth, setIsAuth] = React.useState(
    localStorage.getItem('isAuth') === 'true'
  );

  const updateAuth = (value) => {
    setIsAuth(value);
  };

  const logOut = () => {
    localStorage.setItem('isAuth', false);
    updateAuth(false);
  };

  return (
    <div className="navigation_bar">
      <nav>
        <NavLink to="/home" className="nav_bar_link">
          Home
        </NavLink>
        <NavLink to="/services" className="nav_bar_link">
          Services
        </NavLink>
        <NavLink to="/profile" className="nav_bar_link">
          Profile
        </NavLink>
        {isAuth ? (
          <a href="#" onClick={logOut} key="Logout">
            Logout
          </a>
        ) : (
          [
            <SignIn updateAuth={updateAuth} key="SignIn" />,
            <SignUp key="SignUp" />,
          ]
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
