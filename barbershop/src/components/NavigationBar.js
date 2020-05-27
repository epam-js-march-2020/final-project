import React from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const NavigationBar = () => {
  const [isAuth, setIsAuth] = React.useState(
    localStorage.getItem('isAuth') === 'true'
  );
  console.log(isAuth);

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
          Sevices
        </NavLink>
        {isAuth
          ? [
              <NavLink to="/profile" className="nav_bar_link" key="Profile">
                Profile
              </NavLink>,
              <a href="#" onClick={logOut} key="Logout">
                Logout
              </a>,
            ]
          : [
              <SignIn updateAuth={updateAuth} key="SignIn" />,
              <SignUp key="SignUp" />,
            ]}
      </nav>
    </div>
  );
};

export default NavigationBar;
