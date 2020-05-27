import React from 'react';

class SignUp extends React.Component {
  state = {
    login: '',
    password: '',
    isOpen: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = (event) => {
    event.preventDefault();

    localStorage.setItem('login', this.state.login);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('isAuth', false);

    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <a
          href="#"
          className="nav_bar_link"
          onClick={() => this.setState({ isOpen: true })}
        >
          Sign Up
        </a>

        {this.state.isOpen && (
          <div className="modal">
            <div>
              <h3>Sign Up</h3>
            </div>
            <div className="modal_body">
              <form onSubmit={this.handleSignUp}>
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
                <button type="submit">Sign Up</button>
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

export default SignUp;
