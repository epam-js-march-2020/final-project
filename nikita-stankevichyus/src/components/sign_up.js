import React from 'react';
import { validateName, validatePassword, validateEmail } from './validation.js';
import { ModalMessage } from './modal_message';

// Initial state
const clearState = {
  name: '',
  secondName: '',
  email: '',
  password: '',
  validName: true,
  validSecondName: true,
  validEmail: true,
  validPassword: true,
  message: false,
}

// Capitalizes first letter
const capitalizeFirst = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = clearState;

    this.allValid = this.allValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  // Returns true if every input data is valid
  allValid = () => {
    return (
      this.state.validName &&
      this.state.validSecondName &&
      this.state.validEmail &&
      this.state.validPassword
    )
  }

  handleChange(event) {
    
    // Validation depending on the name of the input
    const validate = (name, value) => { 
      switch(name) {
        case 'name': {
          return validateName(value);
        }

        case 'secondName': {
          return validateName(value);
        }

        case 'email': {
          return validateEmail(value);
        }

        case 'password': {
          return validatePassword(value);
        }

        default: return false;
      }
    }

    let validation = validate(event.target.name, event.target.value);

    this.setState({

      [event.target.name]: event.target.value,

      // E.g. ['validName']
      ['valid' + capitalizeFirst(event.target.name)]: validation,
    })

    // Hidding note that email is taken after it's changing
    if(event.target.name === 'email') {
      this.setState({
        takenEmail: false,
      })
    }

  }


  handleSubmit(event) {
    event.preventDefault();

    // If all inputs' data is valid
    if(this.allValid()) {
      

      // If no such email is used for another account
      if (localStorage.getItem(this.state.email) === null) {

        // Register new account
        localStorage.setItem(this.state.email, 
          JSON.stringify({
            'name': this.state.name,
            'secondName': this.state.secondName,
            'email': this.state.email,
            'password': this.state.password,
            'services': [],
          })
        )
        
        this.props.outModals();
        this.setState({
          message: true,
        })

      } else {

        // If such email is already used in another account show note
        this.setState({
          takenEmail: true,
        })
      }
    }

  }

  // When canceled
  handleClick(event) {
    this.setState(clearState);
    this.props.outModals(); 
  }

  closeMessage() {
    this.setState(clearState);
  }

  render() {
    return (
      <>
      {this.state.message ? 
      
        <ModalMessage 
          text = 'Account registered!'
          onClick = {this.closeMessage}
        /> 
        : null 

      }
      <div id='sign_up' className = { this.props.modals.signUp ? 'sign_up modal_window' : 'sign_up modal_window hidden'}>
        <form onSubmit = {this.handleSubmit} id='sign_up_form container' className = 'needs-validation' novalidate>
          <div className = 'form-row'>
            <label className = 'row mg-b-10'>
              <div className = 'mg-b-5 input_note'>Enter your name</div>
              <input 
                onChange = {this.handleChange} name = 'name' 
                className = {'form-control mg-b-10' + (this.state.validName ? '' : ' invalid_input')} 
                type = 'text' 
                placeholder='Your name' 
                required
                value = {this.state.name}
                >

                </input>
              <div 
                className = {'invalid_note invalid_name' +  (this.state.validName ? ' hidden' : '')}>
                The name must be at least 3 characters long.
              </div>
            </label>
            
          </div>
          <div className = 'form-row'>
            <label className = 'row mg-b-10'>
              <div 
                className = 'mg-b-5 input_note'>Enter your second name</div>
              <input 
                  onChange = {this.handleChange} 
                  name = 'secondName' 
                  className = {'form-control mg-b-10' + (this.state.validSecondName ? '' : ' invalid_input')} 
                  type = 'text' 
                  placeholder='Your second name' 
                  required
                  value = {this.state.secondName}
                  ></input>
              <div 
                className = {'invalid_note invalid_secondName' +  (this.state.validSecondName ? ' hidden' : '')}>
                The second name must be at least 3 characters long.
              </div>
            </label>
          </div>
          <div className = 'form-row'>
            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5 input_note'>Enter your email</div>
              <input 
                onChange = {this.handleChange} 
                name = 'email' 
                className = {'form-control mg-b-10' + (this.state.validEmail ? '' : ' invalid_input')} 
                type = 'email' 
                placeholder='Your email' 
                required
                value = {this.state.email}
                ></input>
              <div 
                className = {'invalid_note invalid_email mg-t-5' + (this.state.validEmail ? ' hidden' : '')}>
                Please enter the correct email.
              </div>
              <div 
                className = {'invalid_note invalid_email_exists mg-t-5' + (this.state.takenEmail ? '' : ' hidden')}>
                This email is already taken!
              </div>
            </label>
          </div>
          <div className = 'form-row'>
            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5 input_note'>Enter your password</div>
              <input 
                onChange = {this.handleChange} 
                name = 'password' 
                className = {'form-control mg-b-10' + (this.state.validPassword ? '' : ' invalid_input')} 
                type = 'password' 
                placeholder='Your password' 
                required
                value = {this.state.password}
                >


                </input>
              <div 
                className = {'invalid_note invalid_password mg-t-5' +  (this.state.validPassword ? ' hidden' : '')}>
                The password must be at least 5 characters long.
              </div>
            </label>
            </div>  
            <div className = 'mg-t-35 container row justify-content-between'>
              <button className = 'col-6 button_project button_project--alternative mg-l--15' type='submit'>Commit</button>
              <button onClick = {this.handleClick} className = 'col-5 button_project button_project--alternative mg-r--45' type='button'>Close</button>
            </div>
        </form>
      </div>
      </>
    )
  }
}