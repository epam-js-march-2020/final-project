import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import './Header.scss';
import { loginFailure } from '../../store/actions/login';
const Header = (props) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const logOut = (ev) => {
    ev.preventDefault();

    dispatch(loginFailure());
    props.history.push('/');
  };
  function AuthButtons() {
    return (
      <>
        <NavLink
          to='/orders'
          className='nav-link'
          activeClassName='header__link--active'
        >
          Мои заказы
        </NavLink>
        <button className='btn btn-info' onClick={logOut}>
          Выйти
        </button>
      </>
    );
  }
  function AccountButtons() {
    return (
      <>
        <NavLink
          to='/signUp'
          className='nav-link'
          activeClassName='header__link--active'
        >
          Регистрация
        </NavLink>
        <NavLink
          to='/signIn'
          className='nav-link'
          activeClassName='header__link--active'
        >
          Войти
        </NavLink>
      </>
    );
  }
  return (
    <header className='header'>
      <nav className='navbar navbar-light bg-light'>
        <NavLink exact to='/' className='nav-link'>
          <img className='navbar__logo' src={logo} alt='Logo'></img>
        </NavLink>
        <NavLink
          exact
          to='/'
          className='nav-link'
          activeClassName='header__link--active'
        >
          Главная
        </NavLink>
        <NavLink
          to='/services'
          className='nav-link'
          activeClassName='header__link--active'
        >
          Услуги
        </NavLink>

        {!isLogged ? <AccountButtons /> : <AuthButtons />}
      </nav>
    </header>
  );
};

export default Header;
