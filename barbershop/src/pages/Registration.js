import React from 'react';
import { Link } from 'react-router-dom';


export default class Registration extends React.Component {
    state = {
        login: '',
        password: '',
        isRegistered: false
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleSubmit = event => {
    event.preventDefault()
    const { login,  password } = this.state;
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);

    
    this.setState({ isRegistered: true }); //меняем состояние залогинивания
    }

    render() {
      const isRegistered = this.state.isRegistered;
      if (isRegistered) {
        console.log('regist', isRegistered)
        return (

          <section className='registration'>
          <div className='registration__wrapper'>
            <div className='registration__form-wrapper'>
                <div className='registration__form-inner registration__form-inner-success'>
                  <h1 className='registration__form-title  registration__form-title-success'>Congratulations! ARE YOU REGISTERED</h1>
                  <Link  to='/login'><h1 className='registration__form-subtitle'>Please enter your username and password</h1> </Link>
                </div>
              </div>
            </div>
          </section>
         
           
        )
      } else
        return (
          <section className='registration'>
            <div className='registration__wrapper'>
              <div className='registration__form-wrapper'>
                  <form className='registration__form' onSubmit={this.handleSubmit}>
                      <div className='registration__form-inner'>
                          <Link  to='/login'><span>SIGN IN</span></Link>
                      </div>
                    <legend className='registration__form-title'>SIGN UP FOR AN ACCOUNT</legend>
                    <div className='registration__form-input-container'>
                      <input className='registration__form-input' type='text' name='login'  value={this.state.login} onChange={this.handleChange} required placeholder='Enter your login' />
                      <input className='registration__form-input' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required/>
                      <button className='button registration__button' type='submit'>Enter </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          )
    }
}

