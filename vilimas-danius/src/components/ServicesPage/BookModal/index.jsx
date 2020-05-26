import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeBooking } from '../../../store/actions/booking';
import './BookModal.scss';
import { addAppointment } from './../../../store/actions/account';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

const mapStateToProps = (state) => {
  return { bookingModal: state.bookingModal, email: state.auth.user.email };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBooking: () => dispatch(closeBooking()),
    addAppointment: (appointment) => dispatch(addAppointment(appointment)),
  };
};
class BookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: '',
      time: '14:00',
      date: Date.now(),
      address: 'Каменноостровский, 89',
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleAddAppointment = this.handleAddAppointment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onDayChange(day) {
    this.setState({ date: day });
  }
  handleClose() {
    this.props.closeBooking();
  }
  handleAddAppointment() {
    const date = new Date(this.state.date);
    this.props.addAppointment({
      id: Math.random(),
      service_name: this.props.service,
      user_email: this.props.email,
      time: this.state.time,
      date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      address: this.state.address,
    });
    this.props.closeBooking();
  }
  render() {
    return (
      <div className='myModal myModal-modal'>
        <div className='myModal__content'>
          <div className='myModal__container'>
            <h4 className='text-center'>Запись на услугу </h4>
            <h4 className='text-center'>"{this.props.service}"</h4>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                this.handleAddAppointment();
              }}
            >
              <div className='form-group'>
                <label htmlFor='exampleFormControlSelect1'>
                  Выберите время:
                </label>
                <select
                  className='form-control'
                  name='time'
                  onChange={this.onChange}
                  value={this.state.time}
                  required
                >
                  <option value='10:00'>10:00</option>
                  <option value='14:00'>14:00</option>
                  <option value='18:00'>18:00</option>
                  <option value='22:00'>22:00</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Выберите дату:</label>
                <DayPickerInput
                  placeholder={'Дата'}
                  onDayChange={this.onDayChange}
                  format='dd/MM/yyyy'
                  inputProps={{ required: true }}
                />
              </div>
              <div className='form-group'>
                <label>Выберите салон:</label>
                <select
                  className='form-control'
                  name='address'
                  onChange={this.onChange}
                  value={this.state.address}
                  required
                >
                  <option>Кораблестроителей, 30</option>
                  <option>Профессора Попова, 6</option>
                  <option>Каменноостровский, 89</option>
                </select>
              </div>

              <div className='form-row'>
                <div className='col'>
                  <button className='btn btn-danger' onClick={this.handleClose}>
                    Закрыть
                  </button>
                </div>
                <div className='col'>
                  <button className='btn btn-info' type='submit'>
                    Записаться
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookModal);
