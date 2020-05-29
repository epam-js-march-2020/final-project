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
    <div className="nav_bar_background">
      <nav>
        <div className="nav_bar">
          <div>
            <NavLink to="/home">
              Home
            </NavLink>
            <NavLink to="/services">
              Services
            </NavLink>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </div>
          <div>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
