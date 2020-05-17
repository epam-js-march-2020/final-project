import React from 'react';
import { ServiceProfile } from './service_profile';



export class Profile extends React.PureComponent{
  
  constructor(props) {
    super(props);
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
    <div className = 'container row profile justify-content-end align-items-center'>
      <div className = 'row col-6'>
        <h1 className = 'col-12'>{this.props.user.name}</h1>
        <h1 className = 'col-12'>{this.props.user.secondName}</h1>
        <h1 className = 'col-12'>{this.props.user.email}</h1>
      </div>
    <div className = 'col-6'>
      {services}
    </div>
    </div>
  )
  }
} 