import React from 'react';
import { Service } from './service';

export function Services(props) {

  
    const serviceList = JSON.parse(localStorage.getItem('services'));

    // Mapping each available service from DB
    const services = serviceList.map((element)=>{
      return <Service
        key = {element.name}
        name = {element.name}
        price = {element.price}
        description = {element.description}
        photo = {element.photo}
        addService = {props.addService}
        toService = {props.toService}
        user = {props.user}
      />
    })
  
  
  return (
    <div className = 'services row container-fluid justify-content-center align-content-center'>
    <table className="table">
      <thead>
        <tr>
          <th colSpan='1'>SERVICE</th>
          <th colSpan='1'>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {services}
      </tbody>
    </table>
    </div> 
  )
  
}