import React, { Component } from 'react';
import AppointmentCard from './AppointmentCard';
import { connect } from 'react-redux';
import './Account.scss';

import { updateUser } from '../../store/actions/users';

const mapStateToProps = (state) => {
  return { auth: state.auth, account: state.account };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth.user.email,
      firstName: this.props.auth.user.firstName,
      lastName: this.props.auth.user.lastName,
      password: this.props.auth.user.firstName,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    const { email, password, firstName, lastName } = this.state;
    e.preventDefault();
    if (true) {
      alert('Вы успешно записались!');
      updateUser({ email, password, firstName, lastName });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const filtered = this.props.account.appointments.filter(
      (el) => el.user_email === this.props.auth.user.email
    );
    return (
      <div className='container'>
        <div className='row flex-wrap mt-3'>
          <div className='col dash'>
            <h3 className='text-center'>Ваши записи</h3>
            <div className='d-flex justify-content-around'>
              {filtered.length > 0 ? (
                <table className='table table-responsive table-striped '>
                  <thead>
                    <tr>
                      <th scope='col'>Услуга</th>
                      <th scope='col'>Дата и Время</th>
                      <th scope='col'>Адрес</th>
                      <th scope='col'>Отменить</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((el) => (
                      <AppointmentCard item={el} key={el.id} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h4 className='noAppointments'>У вас нет записей</h4>
              )}
            </div>
          </div>
          <div className='col col-xl-5 dash'>
            <h3 className='text-center'>Изменить личные данные</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-row form-group'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Имя'
                    name='firstName'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Фамилия'
                    name='lastName'
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Ваш Пароль *'
                  name='password'
                  onChange={this.onChange}
                  required
                />
                <button
                  type='submit'
                  className='btn btn-info mt-3 btn-block-576'
                  disabled={false}
                >
                  Изменить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
