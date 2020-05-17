import React from 'react';

const clearState = {
  email: '',
  password: '',
}



export class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value, 
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
      } else {
        alert('Wrong password!');
      }
    } else {
      alert('No such user!');
    }
    
    this.setState({ clearState });
    this.props.outModals();
  }

  handleClick(event) {
    this.setState({ clearState });
    this.props.outModals(); 
  }

  render() {
    return (
      <div id='log_in' className = { this.props.logIn ? 'log_in modal_window' : 'log_in modal_window hidden'}>
        <form onSubmit = {this.handleSubmit} id='sign_up_form container'>

            <label className = 'row mg-b-10'>
              <div className = 'mg-b-5'>Enter your email</div>
              <input onChange = {this.handleChange} name = 'email' className = 'form-control' type = 'email' placeholder='Your email'></input>
            </label>

            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5'>Enter your password</div>
              <input onChange = {this.handleChange} name = 'password' className = 'form-control' type = 'password' placeholder='Your password'></input>
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