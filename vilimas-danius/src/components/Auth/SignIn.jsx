import React, { Component } from 'react';
import { loginSuccess, loginFailure } from '../../store/actions/login';
import { connect } from 'react-redux';
import { users } from '../../assets/db.json';
import './Auth.scss';
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (auth) => dispatch(loginSuccess(auth)),
    loginFailure: (auth) => dispatch(loginFailure()),
  };
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = users.filter(
      (u) => u.email === this.state.email && u.password === this.state.password
    )[0];
    user ? this.props.loginSuccess(user) : this.props.loginFailure();
    this.props.history.push('/orders');
  }
  render() {
    return (
      <div className='main container mt-2'>
        <div className='row justify-content-center align-items-center '>
          <div className='col-sm-6 auth'>
            <h3>Вход</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Ваша почта *'
                  name='email'
                  onChange={this.onChange}
                  required
                />
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
              </div>
              <button type='submit' className='btn btn-info btn-block-576'>
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
