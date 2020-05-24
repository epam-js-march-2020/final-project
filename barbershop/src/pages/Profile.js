import React from 'react';
import { Redirect } from "react-router-dom";
import Order from './Order';




export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  
      isLoggedIn: false,

      isRegistered: false
    };
  };


  
  render () {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    const isRegistered = localStorage.getItem('isRegistered')
   
    if (isLoggedIn) {
      return (
        <Order />
        
      )        
    }
  
  
    else {
    return (
      <Redirect to='/login'/>
    )
    };
  };
};

