import React from 'react';

const clearState = {
  name: '',
  secondName: '',
  email: '',
  password: '',
}

export class SignUp extends React.Component {
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

    localStorage.setItem(this.state.email, 
      JSON.stringify({
        'name': this.state.name,
        'secondName': this.state.secondName,
        'email': this.state.email,
        'password': this.state.password,
        'services': [],
      })
    )
    localStorage.setItem('users', parseInt(localStorage.getItem('users'), 10)+1);
    
    this.setState({ clearState });
    this.props.outModals();
  }

  handleClick(event) {
    this.setState({ clearState });
    this.props.outModals(); 
  }

  render() {
    return (
      <div id='sign_up' className = { this.props.signUp ? 'sign_up modal_window' : 'sign_up modal_window hidden'}>
        <form onSubmit = {this.handleSubmit} id='sign_up_form container'>

            <label className = 'row mg-b-10'>
              <div className = 'mg-b-5'>Enter your name</div>
              <input onChange = {this.handleChange} name = 'name' className = 'form-control mg-b-10' type = 'text' placeholder='Your name'></input>
            </label>
            <label className = 'row mg-b-10'>
              <div className = 'mg-b-5'>Enter your second name</div>
              <input onChange = {this.handleChange} name = 'secondName' className = 'form-control mg-b-10' type = 'text' placeholder='Your second name'></input>
            </label>
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