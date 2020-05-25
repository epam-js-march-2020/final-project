import React from 'react';
import  './serviceInfo.css';
import AddServiceButton from '../../../addServiceButton/addServiceButton';
import serviceList from '../data';

const serviceInfo = (props) => {
let result;

    serviceList.map(item => item.serviceList.map(item => {
        if (item.id == props.id) {
            result = item;
        }
    }));

    return ( 
    <div className="serviceInfo">
    <h1 className="caliostro">{result.name}</h1>
    <img className="service_img" src={result.imgSrc} alt={result.name} /><br></br>
    <p className="desc">{result.description}</p>
   <AddServiceButton 
   isLogged={props.isLogged} 
   serviceName={result.name} 
   addService = {props.addService} 
   deleteService = {props.deleteService}
   checkAdded = {props.checkAdded}
   isSomeService = {props.isSomeService}
   />
    </div> );
}
 
export default serviceInfo;