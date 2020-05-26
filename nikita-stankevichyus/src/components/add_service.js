import React from 'react';
import { validateNumber } from './validation';
import { ModalMessage } from './modal_message'

// State before any changes
const initialState = {
  date: '',
  number: '',
  wrongNumber: false,
  message: false,
}

export class AddService extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  // Formatting date string to YYMMDD format for 'input' 'min' attribute
  formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() ;
    if (yy < 10) yy = '0' + yy;
  
    return yy + '-' + mm + '-' + dd;
  }

  // When canceled
  handleClick(event) {
    this.setState(this.initialState)
    this.props.outModals();
  }


  handleSubmit(event) {
    event.preventDefault();

    // If input is valid
    if (!this.state.wrongNumber) {

      // If user is logged
      if (this.props.user.loged) {

        // Dispatching action
        this.props.addService(this.props.navigation.bufferService.name, this.state.date);


        // Adding in DB by get, parse, change, stringify pattern
        let user = localStorage.getItem(this.props.user.email);
        user = JSON.parse(user);
        user.services.push({
          name: this.props.navigation.bufferService.name,
          date: this.state.date,
        })

        user = JSON.stringify(user);

        localStorage[this.props.user.email] = user;
        
        this.setState({
          message: true,
        })
        this.props.outModals();
      
        // If we are dealing with guest
      } else {

        // Dispatching action
        this.props.addGuestService(this.props.navigation.bufferService.name, this.state.date, this.state.number)

        // Adding in DB by get, parse, change, stringify pattern

        let guests = localStorage.getItem('guests');

        guests = JSON.parse(guests);

        
        if(guests[this.state.number]){

          guests[this.state.number].services ? 
            guests[this.state.number].services.push({
              name: this.props.navigation.bufferService.name,
              date: this.state.date,
            })
            // If if is the first time the guest orders services we should initialize first
          : guests[this.state.number].services = [{
              name: this.props.navigation.bufferService.name,
              date: this.state.date,
          }]

        } else {
          guests[this.state.number] = {
            services: [{
              name: this.props.navigation.bufferService.name,
              date: this.state.date,
            }]
          }
        }

        guests = JSON.stringify(guests);

        localStorage.removeItem('guests');
        localStorage.setItem('guests', guests);

        this.setState({
          message: true,
        })

        // Clearing state back to initial state
        // this.setState(this.initialState)
        this.props.outModals();
      }
    }
  }

  
  handleChange(event) {

    // Saving current value in the state
    this.setState({
      [event.target.name]: event.target.value,
    })

    // Find all non-numericals 
    let nonNumericals = /\D/ig;
    
    
    // If input is number, non-numerical characters are prohibited
    if (event.target.name === 'number') {
      this.setState({
        number: event.target.value.replace(nonNumericals, ''),
        wrongNumber: !validateNumber(event.target.value),
      })
    }
    
  }

  closeMessage() {
    // this.props.outModals();
    this.setState(initialState)
  }

  render() {
    let date = new Date();
    
    return (
      <>
      {this.state.message ? 
        <ModalMessage text = "Service ordered!" onClick = {this.closeMessage}/>
        : null
      }
      <div id='add_service' className = {'add_service modal_window ' + (this.props.modals.addService ? '' : ' hidden') }> 
        <form onSubmit = {this.handleSubmit} id = 'add_service_form' className = 'container'>
          <label className = 'row'>
            <div className = 'mg-b-5 input_note'>Choose desirable date</div>
            <input onChange = {this.handleChange} min = {this.formatDate(date)} 
                   type='date' 
                   className = 'form-control'
                   name='date'
                   value = {this.state.date}
                   required ></input>
          </label>
          {

            // If user is not logged (dealing with guest) we'll additionally request telephone number
            this.props.user.loged ? <></>
            : <label className = 'row mg-t-15'>
                  <div className = 'mg-b-5 input_note'>Leave your telephone number</div>
                  <input 
                   onChange = {this.handleChange}
                   value={this.state.number}
                   name='number' 
                   className = 'form-control'
                   placeholder='Your telephone number'
                   required ></input>

                   <div 
                    className = {'invalid_note invalid_number mg-t-10' + (this.state.wrongNumber ? '' : ' hidden')}>
                    Please enter the correct number!
                   </div>
              </label>

          }
          <div className = 'row mg-t-45 justify-content-between'>
            <button type='submit' className = 'button_project button_project--alternative col-5'>Commit</button>
            <button onClick = {this.handleClick} type='button' className = 'button_project button_project--alternative col-5'>Close</button>
          </div>
        </form>
      </div>
      </>
    )
  }
}