import React, { Component } from 'react';
import AppointmentCard from './AppointmentCard';
import { connect } from 'react-redux';
import './Account.scss';
const mapStateToProps = (state) => {
  return { auth: state.auth, account: state.account };
};

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const filtered = this.props.account.appointments.filter(
      (el) => el.user_email === this.props.auth.user.email
    );
    return (
      <div className='container'>
        <div className='row flex-wrap mt-3'>
          <div className='col dash'>
            <h3 className='text-center'>Ваши записи</h3>
            {filtered.map((el) => (
              <AppointmentCard
                service={el.service_name}
                key={el.id}
                appointment_id={el.id}
              />
            ))}
          </div>
          <div className='col'>
            <h3 className='text-center'>Ваша информация</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Account);
