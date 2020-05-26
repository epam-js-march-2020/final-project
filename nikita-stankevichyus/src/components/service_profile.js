import React from 'react';
import { ModalEnsurance } from './modal_ensurance';


export class ServiceProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ensurance: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }

  handleDelete = () => {
    this.setState({
      ensurance: true,
    })
  }

  deleteService = () => {

    // Dispatching action
    this.props.deleteService(this.props.index);

    // Interacting with DB via get, parse, change, stringify pattern
    let user = localStorage.getItem(this.props.user.email);
    user = JSON.parse(user);
    user.services.splice(this.props.index, 1);
    user = JSON.stringify(user);
    localStorage[this.props.user.email] = user;

    this.setState({
      ensurance: false,
    })

  }

  cancelDelete = () => {
    this.setState({
      ensurance: false,
    })
  }

  render() {
  return (
    <>
      {
        this.state.ensurance ? 
          <ModalEnsurance 
            text = 'Are you sure?'
            onCommit = {this.deleteService}
            onCancel = {this.cancelDelete}
          />
          : null
      }

      <div className = 'mg-b-10 profile_service justify-content-center service container row mg-h-auto'>
        <div className = 'service_name col-12 col-md-4 container row justify-content-center align-items-center align-content-center'>
          {this.props.name}
        </div>
        <div className = 'service_date col-12 col-md-4 container row justify-content-center align-items-center align-content-center'>
          {this.props.date}
        </div>
     
        <button onClick = {this.handleDelete} className = 'col-12 col-md-4 button_project button_project--dark service_cancel'>
          Cancel
        </button>
     
      </div>
    </>
  )
  }
}