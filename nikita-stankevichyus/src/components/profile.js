import React from 'react';
import { ServiceProfile } from './service_profile';
import { validateName, validateEmail } from './validation'



const capitalizeFirst = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export class Profile extends React.PureComponent{
  
  constructor(props) {
    super(props);

    const initialState = {
      name: this.props.user.name,
      secondName: this.props.user.secondName,
      email: this.props.user.email,
      wrongName: false,
      wrongSecondName: false,
      wrongEmail: false,
      takenEmail: false,
    }

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.editName = this.editName.bind(this);
    this.editSecondName = this.editSecondName.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.outModals = this.outModals.bind(this);
  }

  handleChange(event) {

    let validation;

    if(event.target.name === 'email') {
      validation = validateEmail(event.target.value);
      this.setState({
        takenEmail: false,
      })
    } else {
      validation = validateName(event.target.value);
    }

    console.log(validation);

    this.setState({
      [event.target.name]: event.target.value,
      ['wrong' + capitalizeFirst(event.target.name)]: !validation,
    })
  }

  editName(event) {
    event.preventDefault()

    if (!this.state.wrongName) {
      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);

      user.name = this.state.name;

      user = JSON.stringify(user);
      localStorage[this.props.user.email] = user;

      this.props.changeName(this.state.name);
      this.props.outModals();
    }

  }

  editSecondName(event) {

    event.preventDefault()

    if (!this.state.wrongSecondName) {
      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);

      user.secondName = this.state.secondName;

      user = JSON.stringify(user);
      localStorage[this.props.user.email] = user;

      this.props.changeSecondName(this.state.secondName);
      this.props.outModals();
    }
  }

  editEmail(event) {
    event.preventDefault()
    
    if (!this.state.wrongEmail) {


        let user = localStorage.getItem(this.props.user.email);

        if (localStorage.getItem(this.state.email) === null) {

          user = JSON.parse(user);

          user.email = this.state.email;

          user = JSON.stringify(user);

          this.props.changeEmail(this.state.email);

          localStorage.setItem(this.state.email, user)
          localStorage.removeItem(this.props.user.email);

          this.props.outModals();

        } else {
          this.setState({
            takenEmail: true,
          })
        }
    }
  }

  outModals() {
    this.props.outModals();
  }

  render () {
    
    const serviceCollection = this.props.user.services;
    const deleteService = this.props.deleteService;
    const user = this.props.user;

    const services =  this.props.user.services.map((element)=>{
      return <ServiceProfile
        key = {serviceCollection.indexOf(element)}
        name = {element.name}
        date = {element.date}
        index = {serviceCollection.indexOf(element)}
        user = {user}
        deleteService = {deleteService}
      />
    })

    console.log(this.props.user.services);
  return (
    <>
    <div id = 'edit_name' 
      className = {'modal_window edit_name ' + (this.props.modals.changeName ? '' : 'hidden')}>
      <form onSubmit = {this.editName} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15'>Enter new name</span>
          <input onChange = {this.handleChange} name = 'name' 
              value = {this.state.name}
              className = {'form-control' + (this.state.wrongName ? ' invalid_input' : '')} type = 'text' placeholder = 'New name'></input>
          <div 
              className = {'invalid_note invalid_edit_name mg-t-5' + (this.state.wrongName ? '' : ' hidden')}>
              The name must be at least 3 characters long.
          </div>
        </label>
        <div className = 'row col-12 justify-content-between'>
          <button className = 'btn btn-light col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'btn btn-light col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>

    <div id = 'edit_second_name' 
      className = {'modal_window edit_second_name '+ (this.props.modals.changeSecondName ? '' : 'hidden')}>
         <form onSubmit = {this.editSecondName} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15'>Enter new second name</span>
          <input onChange = {this.handleChange} name = 'secondName' 
            value = {this.state.secondName}
            className = {'form-control' + (this.state.wrongSecondName ? ' invalid_input' : '')} type = 'text' placeholder = 'New second name'></input>
          <div 
            className = {'invalid_note invalid_edit_secondName mg-t-5' +  (this.state.wrongSecondName ? '' : ' hidden')}>
            The second name must be at least 3 characters long.
          </div>
        </label>
        <div className = 'row col-12 justify-content-between'>
          <button className = 'btn btn-light col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'btn btn-light col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>

    <div id = 'edit_email' 
      className = {'modal_window edit_email '+ (this.props.modals.changeEmail ? '' : 'hidden')}>
      <form onSubmit = {this.editEmail} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15'>Enter new email</span>
          <input onChange = {this.handleChange} name = 'email' 
              value = {this.state.email}
              className = {'form-control' + (this.state.wrongEmail ? ' invalid_input' : '')} type = 'email' placeholder = 'New email'></input>
          <div 
            className = {'invalid_note invalid_edit_email mg-t-5' +  (this.state.wrongEmail ? '' : ' hidden')}>
            Please enter the correct email.
          </div>
          <div 
            className = {'invalid_note invalid_edit_email_exists mg-t-5' + (this.state.takenEmail ? '' : ' hidden')}>
            This email is already taken!
          </div>
        </label>
        <div className = 'row col-12 justify-content-between'>
          <button className = 'btn btn-light col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'btn btn-light col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>

    <div className = 'container row profile justify-content-between align-items-center'>
      <h1 className = 'row col-12 mg-l-15 mg-t-15'>Your profile</h1>
      <div className = 'row col-12'>
      <div className = 'row col-6'>
        <div className = 'row col-12 mg-b-15'>
          <p className = 'col-6'>{this.props.user.name}</p>
          <button onClick = {this.props.toChangeName} className = 'col-6 btn btn-dark'>Edit</button>
        </div>
        <div className = 'row col-12 mg-b-15'>
          <p className = 'col-6'>{this.props.user.secondName}</p>
          <button onClick = {this.props.toChangeSecondName} className = 'col-6 btn btn-dark'>Edit</button>
        </div>
        <div className = 'row col-12'>
          <p className = 'col-6'>{this.props.user.email}</p>
          <button onClick ={this.props.toChangeEmail} className = 'col-6 btn btn-dark'>Edit</button>
          </div>
      </div>
    <div className = 'col-6'>
      {services}
    </div>
    </div>
    </div>
    </>
  )
  }
} 