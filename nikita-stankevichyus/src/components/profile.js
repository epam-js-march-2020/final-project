import React from 'react';
import { ServiceProfile } from './service_profile';



export class Profile extends React.PureComponent{
  
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.editName = this.editName.bind(this);
    this.editSecondName = this.editSecondName.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.outModals = this.outModals.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  editName(event) {
    event.preventDefault()

    let user = localStorage.getItem(this.props.user.email);
    user = JSON.parse(user);

    user.name = this.state.name;

    user = JSON.stringify(user);
    localStorage[this.props.user.email] = user;

    this.props.changeName(this.state.name);
    this.props.outModals();

  }

  editSecondName(event) {
    event.preventDefault()

    let user = localStorage.getItem(this.props.user.email);
    user = JSON.parse(user);

    user.secondName = this.state.secondName;

    user = JSON.stringify(user);
    localStorage[this.props.user.email] = user;

    this.props.changeSecondName(this.state.secondName);
    this.props.outModals();
  }

  editEmail(event) {
    event.preventDefault()
    
    let user = localStorage.getItem(this.props.user.email);
    user = JSON.parse(user);

    user.email = this.state.email;

    user = JSON.stringify(user);

    this.props.changeEmail(this.state.email);

    localStorage.setItem(this.state.email, user)
    localStorage.removeItem(this.props.user.email);

    this.props.outModals();
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
          <input onChange = {this.handleChange} name = 'name' className = 'form-control' type = 'text' placeholder = 'New name'></input>
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
          <input onChange = {this.handleChange} name = 'secondName' className = 'form-control' type = 'text' placeholder = 'New second name'></input>
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
          <input onChange = {this.handleChange} name = 'email' className = 'form-control' type = 'email' placeholder = 'New email'></input>
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