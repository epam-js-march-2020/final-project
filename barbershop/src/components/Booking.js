import React from 'react';
import DatePicker from 'react-datepicker';

class Booking extends React.Component {
  state = {
    reservations: [],
    selectedDate: new Date(),
    selectedTime: '12:00',
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

    const reservation = {
      service: this.props.service.title,
      user:
        localStorage.getItem('isAuth') === 'true'
          ? localStorage.getItem('login')
          : 'guest',
      date: this.state.selectedDate.toLocaleDateString(`en-US`, {
        day: `2-digit`,
        month: `short`,
        year: 'numeric',
      }),
      time: this.state.selectedTime,
    };

    this.state.reservations.push(reservation);
    localStorage.setItem(
      'reservations',
      JSON.stringify(this.state.reservations)
    );

    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          Reserve time
        </button>
        {this.state.isOpen && (
          <div className="modal_fade">
            <div className="modal_window">
              <div className="modal_head">
                <h3>Reserve "{this.props.service.title}"</h3>
              </div>
              <form className="modal_body" onSubmit={this.handleReservation}>
                <div>
                  Chose date:
                  <DatePicker
                    selected={this.state.selectedDate}
                    minDate={Date.now()}
                    onChange={this.handleDateChange}
                  />
                </div>
                Choose time:
                <select
                  name="time"
                  defaultValue="12:00"
                  onChange={this.handleTimeChange}
                >
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
                <div className="modal_buttons">
                  <button className="button" type="submit">
                    Book
                  </button>
                  <button
                    className="button"
                    onClick={() => this.setState({ isOpen: false })}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Booking;
