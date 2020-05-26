import React from 'react';

// Initial state
const clearState = {
  email: '',
  password: '',
  wrongEmail: false,
  wrongPassword: false,
}

// Capitalizes the first letter in the string
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

    // Saving current inputs' value
    this.setState({
      [event.target.name]: event.target.value,

      // e.g. ['wrongName']
      ['wrong' + capitalizeFirst(event.target.name)]: false,
    })

    
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = localStorage.getItem(this.state.email);
    
    // If such account exists
    if (user !== undefined && user !== '' && user !== null) {

      user = JSON.parse(user);

      // If password is right
      if(user['password'] === this.state.password){

        // Fetching info from DB to state
        this.props.logIn(
          user['name'],
          user['secondName'],
          user['email'],
          user['services'],
        );
        
        // Clearing state
        this.setState(clearState);
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

  // When canceled
  handleClick(event) {
    this.setState(clearState);
    this.props.outModals(); 
  }

 

  render() {
    return (
      <div id='log_in' className = { this.props.modals.logIn ? 'log_in modal_window' : 'log_in modal_window hidden'}>
        <form onSubmit = {this.handleSubmit} id='sign_up_form container'>

            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5 input_note'>Enter your email</div>
              <input onChange = {this.handleChange} name = 'email' 
                className = {'form-control' + (this.state.wrongEmail ? ' invalid_input' : '')} 
                type = 'email'
                value = {this.state.email}
                placeholder='Your email'
                required  ></input>
              <div 
                className = {'invalid_login invalid_note mg-t-5' + (this.state.wrongEmail ? '' : ' hidden')}>
                  Account does not exist.
              </div>
            </label>

            <label className = 'row mg-b-15'>
              <div className = 'mg-b-5 text-header input_note'>Enter your password</div>
              <input onChange = {this.handleChange} name = 'password' 
                className = {'form-control' + (this.state.wrongPassword ? ' invalid_input' : '')} 
                type = 'password'
                value = {this.state.password}
                placeholder='Your password'
                required ></input>
              <div 
                className = {'invalid_login_password invalid_note mg-t-5' + (this.state.wrongPassword ? '' : ' hidden')}>
                  Wrong password.
              </div>
            </label>
          
            <div className = 'mg-t-35 container row justify-content-between'>
              <button className = 'col-6 button_project button_project--alternative mg-l--15' type='submit'>Commit</button>
              <button onClick = {this.handleClick} className = 'col-5 button_project button_project--alternative mg-r--45' type='button'>Close</button>
            </div>
        </form>
      </div>
    )
  }
}