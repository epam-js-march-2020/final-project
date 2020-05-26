import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import cone from '../../assets/img/barber-pole.svg';
import './Main.scss';

import ServicesPage from '../ServicesPage';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import Account from '../Account/Account';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Route exact path='/'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='jumbotron my-3 '>
                  <div className='d-flex justify-content-between flex-wrap'>
                    <h1 className=''>Подстригись! </h1>
                    <img
                      className='mx-auto-412'
                      src={cone}
                      alt='cone'
                      width='100vw'
                    />
                  </div>

                  <p className='lead'>
                    Мы классный барбершоп. У нас есть куча полезных услуг,
                    которые могут понадобиться тебе! А ну скорее регистрируйся и
                    записывайся к нам!
                  </p>
                  <hr className='my-4' />
                  <p>
                    В салонах вы можете не только приобрести новую модную
                    стрижку, но и придать идеальную форму бороде и усам.
                  </p>
                  <p className='lead'>
                    <NavLink className='btn btn-primary btn-lg' to='/services'>
                      Посмотреть каталог
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path='/services' component={ServicesPage}></Route>
        <Route path='/orders' component={Account}></Route>
        <Route path='/signUp' component={SignUp}></Route>
        <Route path='/SignIn' component={SignIn}></Route>
      </>
    );
  }
}
export default Main;
