import React from 'react';
import DatePicker from 'react-datepicker';

class Booking extends React.Component {
  state = {
    reservations: [],
    selectedDate: new Date(),
    selectedTime: '',
    isOpen: false,
  };

  componentDidMount() {
    const res = JSON.parse(localStorage.getItem('reservations'));
    this.setState({ reservations: res });
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = (event) => {
    this.setState({ selectedTime: event.target.value });
  };

  handleReservation = (event) => {
    event.preventDefault();

    console.log(this.state);
    const reservation = {
      service: this.props.service.title,
      user: localStorage.getItem('isAuth') === 'true' ? localStorage.getItem('login') : 'guest',
      date: this.state.selectedDate.toLocaleDateString(`en-US`, {day: `2-digit`, month: `short`, year:'numeric' }),
      time: this.state.selectedTime,
    };

    this.state.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.state.reservations));

    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Book</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal_body">
              <div>
                <h3>Book "{this.props.service.title}"</h3>
              </div>
              <form onSubmit={this.handleReservation}>
                <div>
                  Chose date
                  <DatePicker
                    selected={this.state.selectedDate}
                    minDate={Date.now()}
                    onChange={this.handleDateChange}
                  />
                </div>
                <div>
                  Choose time
                  <select name="time" onChange={this.handleTimeChange}>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
                <button type="submit">Book</button>
                <button onClick={() => this.setState({ isOpen: false })}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Booking;
