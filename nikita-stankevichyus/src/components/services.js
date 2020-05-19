import React from 'react';
import { Service } from './service';

export class  Services extends React.PureComponent {

  constructor(props) {
    super(props);

    this.serviceList = JSON.parse(localStorage.getItem('services'));

    this.services = this.serviceList.map((element)=>{
      return <Service
        key = {element.name}
        name = {element.name}
        price = {element.price}
        description = {element.description}
        addService = {this.props.addService}
        toService = {this.props.toService}
        user = {this.props.user}
      />
})
  }
  render () {
  return (
    <table className="table table-dark table-striped mg-t-150">
      <tbody>
        {this.services}
      </tbody>
    </table>
  )
  }
}