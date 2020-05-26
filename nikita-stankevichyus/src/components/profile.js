import React from 'react';
import { ModalMessage } from './modal_message'
import { ModalEnsurance } from './modal_ensurance'

// Element that represents an ordered service by user 
import { ServiceProfile } from './service_profile';

// Validation functions, which return 'true' if validation is successful
import { validateName, validateEmail } from './validation'


// Function capitalizes given string
const capitalizeFirst = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export class Profile extends React.Component{
  
  constructor(props) {
    super(props);

    // Initial state of the component
    const initialState = {
      name: this.props.user.name,
      secondName: this.props.user.secondName,
      email: this.props.user.email,
      wrongName: false,
      wrongSecondName: false,
      wrongEmail: false,
      takenEmail: false,
      message: false,
      ensurance: false,
      onCommit: null,
      onCancel: null,
    }

    this.state = initialState;

    // Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.editName = this.editName.bind(this);
    this.editSecondName = this.editSecondName.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.outModals = this.outModals.bind(this);
    this.logOut = this.logOut.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.cancelLogOut = this.cancelLogOut.bind(this);
  }

  // Handles each change in inputs
  handleChange(event) {

    let validation;

    // Validating depending on type of the input
    if(event.target.name === 'email') {
      validation = validateEmail(event.target.value);
      this.setState({
        takenEmail: false,
      })
    } else {
      validation = validateName(event.target.value);
    }


    this.setState({
      
      // Writing value
      [event.target.name]: event.target.value,
      
      // It's either wrongName or wrongEmail
      ['wrong' + capitalizeFirst(event.target.name)]: !validation,
    })
  }

  // On name change's submit
  editName(event) {
    event.preventDefault()

    // If name is valid
    if (!this.state.wrongName) {

      // Getting item, parsing, changing, stringifying, setting
      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);

      user.name = this.state.name;

      user = JSON.stringify(user);
      localStorage[this.props.user.email] = user;

      this.props.changeName(this.state.name);
      this.props.outModals();
      
      this.setState({
        message: true,
      })
    }

  }

  // On name changes's submit
  editSecondName(event) {

    event.preventDefault()

    // Everything just like the 'editName' one
    if (!this.state.wrongSecondName) {
      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);

      user.secondName = this.state.secondName;

      user = JSON.stringify(user);
      localStorage[this.props.user.email] = user;

      this.props.changeSecondName(this.state.secondName);
      this.props.outModals();

      this.setState({
        message: true,
      })
    }
  }

  // On email change's submit
  editEmail(event) {
    event.preventDefault()
    
    if (!this.state.wrongEmail) {


        let user = localStorage.getItem(this.props.user.email);

        // This additionally checks if the new email is already taken
        if (localStorage.getItem(this.state.email) === null) {

          // Everything is just like the othertwo
          user = JSON.parse(user);

          user.email = this.state.email;

          user = JSON.stringify(user);

          this.props.changeEmail(this.state.email);

          localStorage.setItem(this.state.email, user)
          localStorage.removeItem(this.props.user.email);

          this.props.outModals();
          this.setState({
            message: true,
          })

        } else {
          this.setState({
            takenEmail: true,
          })
        }
    }
  }

  // Closing modals
  outModals() {
    this.props.outModals();
  }

  // Cancel log out
  cancelLogOut() {
    this.setState({
      ensurance: false,
      onCommit: null,
      onCancel: null,
    })
  }

  // On log out
  handleLogOut() {
    this.outModals();
    this.setState({
      ensurance: true,
      onCommit: this.logOut,
      onCancel: this.cancelLogOut,
    })
  }

  // Loggin out
  logOut() {
    this.props.logOut();
    this.props.toHome();
  }

  // Success message
  closeMessage() {
    this.setState({
      message: false,
    })
  }

  render () {
    
    const serviceCollection = this.props.user.services;
    const deleteService = this.props.deleteService;
    const user = this.props.user;

    // Mapping every service user's got to render later
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

  return (
    <>
    {
      this.state.message ?
      <ModalMessage 
        text = 'Edit succesfull!'
        onClick = {this.closeMessage}
      />
      : null
    }

    {
      this.state.ensurance ?
      <ModalEnsurance
        text = 'Are you sure?'
        onCommit = {this.state.onCommit}
        onCancel = {this.state.onCancel}
      />
      : null
    }
  
    {/* Name edit modal window */}
    <div id = 'edit_name' 
      className = {'modal_window edit_name ' + (this.props.modals.changeName ? '' : 'hidden')}>
      <form onSubmit = {this.editName} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15 input_note'>Enter new name</span>
          <input onChange = {this.handleChange} name = 'name' 
              value = {this.state.name}
              className = {'form-control' + (this.state.wrongName ? ' invalid_input' : '')} type = 'text' placeholder = 'New name'></input>
          <div 
              className = {'invalid_note invalid_edit_name mg-t-5' + (this.state.wrongName ? '' : ' hidden')}>
              The name must be at least 3 characters long.
          </div>
        </label>
        <div className = 'row col-12 justify-content-between'>
          <button className = 'button_project button_project--alternative col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'button_project button_project--alternative col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>


    {/* Second name edit modal window */}
    <div id = 'edit_second_name' 
      className = {'modal_window edit_second_name '+ (this.props.modals.changeSecondName ? '' : 'hidden')}>
         <form onSubmit = {this.editSecondName} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15 input_note'>Enter new second name</span>
          <input onChange = {this.handleChange} name = 'secondName' 
            value = {this.state.secondName}
            className = {'form-control' + (this.state.wrongSecondName ? ' invalid_input' : '')} type = 'text' placeholder = 'New second name'></input>
          <div 
            className = {'invalid_note invalid_edit_secondName mg-t-5' +  (this.state.wrongSecondName ? '' : ' hidden')}>
            The second name must be at least 3 characters long.
          </div>
        </label>
        <div className = 'row col-12 justify-content-between'>
          <button className = 'button_project button_project--alternative col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'button_project button_project--alternative col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>

    {/* Email edit window */}
    <div id = 'edit_email' 
      className = {'modal_window edit_email '+ (this.props.modals.changeEmail ? '' : 'hidden')}>
      <form onSubmit = {this.editEmail} className = 'container'>
        <label className = 'row col-12 mg-b-25'>
          <span className = 'text-color-light mg-b-15 input_note'>Enter new email</span>
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
          <button className = 'button_project button_project--alternative col-5' type='submit'>Commit</button>
          <button onClick = {this.outModals} className = 'button_project button_project--alternative col-5' type='button'>Cancel</button>
        </div>
      </form>
    </div>

    {/* Profile itself */}
    <div className = 'container-fluid row profile justify-content-center align-items-center align-content-between align-content-xl-start'>
      <div className = 'row container-fluid profile_header justify-content-center justify-content-md-start'>
        <h1 className = 'row col-12 mg-l-15 justify-content-start'>{this.props.user.name + ' ' + this.props.user.secondName}</h1>
        <p className = 'row col-12 mg-l-15 mg-t-5 justify-content-start'>{this.props.user.email}</p>
      </div>
      <div className = 'row col-xl-6 col-12 justify-content-md-start justify-content-center'>

        <h1 className = 'col-12 row justify-content-center justify-content-md-start mg-b-10'>Manage your profile: </h1>

        <button onClick = {this.props.toChangeName} className = 'col-12 row button_project button_project--primary mg-b-5'>EDIT NAME</button>
        <button onClick = {this.props.toChangeSecondName} className = 'col-12 row button_project button_project--primary mg-b-5'>EDIT SECOND NAME</button>    
        <button onClick ={this.props.toChangeEmail} className = 'col-12 row button_project button_project--primary mg-b-5'>EDIT EMAIL</button>  
        <button onClick={this.handleLogOut} className = 'col-12 row button_project button_project--dark mg-b-5'>LOG OUT</button>
           
      </div>
      <div className = 'row col-xl-6 col-12 align-content-start align-items-start'>
       
          <h1 className = 'col-12 row justify-content-center justify-content-md-start'>Ordered services: </h1>
        
       

          <div className = 'col-12 ordered_services justify-content-center justify-content-md-start'>
            {services}
          </div>
        
      
      </div>
    </div>
    </>
  )
  }
} 