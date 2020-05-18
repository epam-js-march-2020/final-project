import React from 'react';



export class AddService extends React.PureComponent {
  constructor(props) {
    super(props);

    this.initialState = {
      date: ''
    };
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  addService = () => {
    if (this.props.user.loged) {
      this.props.addService(this.props.name, this.props.price);

      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);
      user.services.push({
        name: this.props.name,
        price: this.props.price,
        date: '123',
      })

      user = JSON.stringify(user);

      localStorage[this.props.user.email] = user;

    } else {
      alert('You should log in first!');
    }
  }


  handleClick(event) {
    this.setState(this.initialState)
    this.props.outModals();
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.date !== undefined && this.state.date !== '') { 
      this.props.addService(this.props.bufferService, this.state.date);

      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);
      user.services.push({
        name: this.props.bufferService,
        date: this.state.date,
      })

      user = JSON.stringify(user);

      localStorage[this.props.user.email] = user;
      this.setState(this.initialState)
      this.props.outModals();
    } else {
      alert('Pick date first!');
    }
  }


  handleChange(event) {
    this.setState({
      date: event.target.value,
    })
  }

  render() {
    let date = new Date();
    
    return (
      <div id='add_service' className = {'add_service modal_window ' + (this.props.addingService ? '' : ' hidden') }> 
        <form onSubmit = {this.handleSubmit} id = 'add_service_form' className = 'container'>
          <label className = 'row'>
            <span>Choose your date</span>
            <input onChange = {this.handleChange} min = {this.formatDate(date)} type='date' className = 'form-control'></input>
          </label>
          <div className = 'row mg-t-45 justify-content-between'>
            <button type='submit' className = 'btn btn-light col-5'>Commit</button>
            <button onClick = {this.handleClick} type='button' className = 'btn btn-light col-5'>Close</button>
          </div>
        </form>
      </div>
    )
  }
}