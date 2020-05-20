import React from 'react';

const clearState = {
  email: '',
  password: '',
  wrongEmail: false,
  wrongPassword: false,
}

const capitalizeFirst = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = clearState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      ['wrong' + capitalizeFirst(event.target.name)]: false,
    })

    
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = localStorage.getItem(this.state.email);
    
    if (user !== undefined && user !== '' && user !== null) {
      user = JSON.parse(user);
      if(user['password'] === this.state.password){
        this.props.makeLogIn(
          user['name'],
          user['secondName'],
          user['email'],
          user['services'],
        );
        
        this.setState({ clearState });
        this.props.outModals();

      } else {
        this.setState({
          wrongPassword: true,
        })
      }
    } else {
      this.setState({
        wrongEmail: true,
      })
    }
    
  }

  handleClick(event) {
    this.setState({ clearState });
    this.props.outModals(); 
  }

  render() {
    return (
      <div id='log_in' className = { this.props.logIn ? 'log_in modal_window' : 'log_in modal_window hidden'}>
        <form onSubmit = {this.handleSubmit} id='sign_up_form container'>

            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5'>Enter your email</div>
              <input onChange = {this.handleChange} name = 'email' 
                className = {'form-control' + (this.state.wrongEmail ? ' invalid_input' : '')} 
                type = 'email' 
                placeholder='Your email'
                required  ></input>
              <div 
                className = {'invalid_login invalid_note mg-t-5' + (this.state.wrongEmail ? '' : ' hidden')}>
                  Account does not exist.
              </div>
            </label>

            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5'>Enter your password</div>
              <input onChange = {this.handleChange} name = 'password' 
                className = {'form-control' + (this.state.wrongPassword ? ' invalid_input' : '')} 
                type = 'password' 
                placeholder='Your password'
                required ></input>
              <div 
                className = {'invalid_login_password invalid_note mg-t-5' + (this.state.wrongPassword ? '' : ' hidden')}>
                  Wrong password.
              </div>
            </label>
          
            <div className = 'mg-t-35 container row justify-content-between'>
              <button className = 'col-6 btn btn-light mg-l--15' type='submit'>Commit</button>
              <button onClick = {this.handleClick} className = 'col-5 btn btn-light mg-r--45' type='button'>Close</button>
            </div>
        </form>
      </div>
    )
  }
}