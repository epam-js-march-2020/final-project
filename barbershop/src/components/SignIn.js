import React from 'react';
import { withRouter } from 'react-router';

class SignIn extends React.Component {
  state = {
    login: '',
    password: '',
    isAuth: false,
    isOpen: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  redirectToHome = () => {
    this.props.history.push('/home');
  };

  handleSignIn = (event) => {
    event.preventDefault();

    const { login, password } = this.state;
    const localStorageLogin = localStorage.getItem('login');
    const localStoragePassword = localStorage.getItem('password');

    if (localStorageLogin === login && localStoragePassword === password) {
      localStorage.setItem('isAuth', true);
      this.setState({ isAuth: true, isOpen: false });
      this.props.updateAuth(true);
      this.redirectToHome();
    } else {
      alert('Login or password incorrect. Try again!');
    }
  };

  render() {
    return (
      <React.Fragment>
        <a
          href="#"
          className="nav_bar_link"
          onClick={() => this.setState({ isOpen: true })}
        >
          Sign In
        </a>

        {this.state.isOpen && (
          <div className="modal">
            <div>
              <h3>Sign In</h3>
            </div>
            <div className="modal_body">
              <form onSubmit={this.handleSignIn}>
                Enter login{' '}
                <input
                  type="text"
                  name="login"
                  value={this.state.login}
                  onChange={this.handleInputChange}
                />
                Enter password{' '}
                <input
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <button type="submit">Sign In</button>
                <button onClick={() => this.setState({ isOpen: false })}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

SignIn = withRouter(SignIn);
export default SignIn;
