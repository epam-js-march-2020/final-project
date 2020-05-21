import React from 'react';
import { validateNumber } from './validation';


const initialState = {
  date: '',
  number: '',
  wrongNumber: false,
}

export class AddService extends React.PureComponent {
  constructor(props) {
    super(props);

  
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() ;
    if (yy < 10) yy = '0' + yy;
  
    return yy + '-' + mm + '-' + dd;
  }

  handleClick(event) {
    this.setState(this.initialState)
    this.props.outModals();
  }


  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.wrongNumber) {
      if (this.props.user.loged) {

        this.props.addService(this.props.bufferService.name, this.state.date);

        let user = localStorage.getItem(this.props.user.email);
        user = JSON.parse(user);
        user.services.push({
          name: this.props.bufferService.name,
          date: this.state.date,
        })

        user = JSON.stringify(user);

        localStorage[this.props.user.email] = user;
        this.setState(this.initialState)
        this.props.outModals();
      
      } else {
        this.props.addGuestService(this.props.bufferService.name, this.state.date, this.state.number)

        let guests = localStorage.getItem('guests');

        guests = JSON.parse(guests);

        if(guests[this.state.number]){

          guests[this.state.number].services ? 
            guests[this.state.number].services.push({
              name: this.props.bufferService.name,
              date: this.state.date,
            })
          : guests[this.state.number].services = [{
              name: this.props.bufferService.name,
              date: this.state.date,
          }]

        } else {
          guests[this.state.number] = {
            services: [{
              name: this.props.bufferService.name,
              date: this.state.date,
            }]
          }
        }

        guests = JSON.stringify(guests);

        localStorage.removeItem('guests');
        localStorage.setItem('guests', guests);

        this.setState(this.initialState)
        this.props.outModals();
      }
    }
  }


  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value,
    })

    
    let nonNumericals = /\D/ig;
    
    
    
    if (event.target.name === 'number') {
      this.setState({
        number: event.target.value.replace(nonNumericals, ''),
        wrongNumber: !validateNumber(event.target.value),
      })
    }
    
  }

  render() {
    let date = new Date();
    
    return (
      <div id='add_service' className = {'add_service modal_window ' + (this.props.addingService ? '' : ' hidden') }> 
        <form onSubmit = {this.handleSubmit} id = 'add_service_form' className = 'container'>
          <label className = 'row'>
            <span>Choose desirable date</span>
            <input onChange = {this.handleChange} min = {this.formatDate(date)} 
                   type='date' 
                   className = 'form-control'
                   name='date'
                   value = {this.state.date}
                   required ></input>
          </label>
          {
            this.props.user.loged ? <></>
            : <label className = 'row mg-t-15'>
                  <span>Leave your telephone number</span>
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
            <button type='submit' className = 'btn btn-light col-5'>Commit</button>
            <button onClick = {this.handleClick} type='button' className = 'btn btn-light col-5'>Close</button>
          </div>
        </form>
      </div>
    )
  }
}