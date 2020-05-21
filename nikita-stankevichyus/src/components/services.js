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
    <div className = 'services row container-fluid justify-content-center align-content-center'>
    <table className="table">
      <thead>
        <tr>
          <th colspan='1'>SERVICE</th>
          <th colspan='1'>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {this.services}
      </tbody>
    </table>
    </div> 
  )
  }
}