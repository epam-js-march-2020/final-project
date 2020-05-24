import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";






export default class Login extends React.Component {
  state = {
    login: '',
    password: '',
    isLoggedIn: false,

    isRegistered: false
  };

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  loginSubmitHandler = (event) => {
    event.preventDefault();
    const { login, password } = this.state


    //LS
    let userLS = localStorage.getItem('login');
    let passwordLS = localStorage.getItem('password');
    console.log(userLS)
    if(login !== userLS || password !== passwordLS) {
      alert('Incorrect login or password. Please try again');
      console.log('passwordLS', passwordLS)
  } else {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('isRegistered', true);
      this.setState({ isLoggedIn: true,  isRegistered: true});
  }
  }




  render() {
    const { login, password, isLoggedIn, isRegistered } = this.state;
    
    
    if (isLoggedIn && isRegistered) {
      
      console.log('isRegisteredLOGIN', isRegistered)
      return (
        
        <Redirect to='/profile'/>
       
      )
    } 
    
    
    else 
    return (
      <section className='login'>
        <div className='login__wrapper'>
          <div className='login___form-wrapper'>
              <form className='login__form' onSubmit={this.loginSubmitHandler}>
                <legend className='login__form-title'>TO CONTINUE YOU NEED TO <span>LOG IN</span></legend>
                <div className='login__form-input-container'>
                  <input className='login__form-input' type='text' name='login' value={login} onChange={this.handleChange} required placeholder='Enter your login' />
                  <input className='login__form-input' type='password' name='password' value={password} onChange={this.handleChange} required placeholder='Enter your password' />
                  <button className='button login__button' type='submit'> Enter </button>
                </div>
                <div className='login__form-inner'>
                  <Link  to='/registration'>Don't have an account? <span>SIGN UP</span></Link>
                </div>
              </form>
            </div>
          </div>
      </section>

    )
  }
}


