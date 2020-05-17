import React from 'react';



export class ServiceProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deleteService = this.deleteService.bind(this);
  }

  deleteService = () => {
    this.props.deleteService(this.props.index);

    let user = localStorage.getItem(this.props.user.email);
    user = JSON.parse(user);
    user.services.splice(this.props.index, 1);
    user = JSON.stringify(user);
    localStorage[this.props.user.email] = user;

  }

  render() {
  return (
    <div className = 'mg-b-10 profile_service service container row'>
      <div className = 'service_name col-4 container row justify-content-center align-items-center align-content-center'>
        {this.props.name}
      </div>
      <div className = 'service_date col-4 container row justify-content-center align-items-center align-content-center'>
        {this.props.date}
      </div>
      <button onClick = {this.deleteService} className = 'btn btn-dark service_cancel col-4'>
        Cancel
      </button>
    </div>
  )
  }
}