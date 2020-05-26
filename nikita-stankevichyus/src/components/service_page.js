import React from 'react';
import image from '../images/shaving.jpg'

export function ServicePage(props){
 

  const handleClick = () => {

    // Dispatching action
    props.toAddService(props.name);
  }
  

    return (
      <div className = 'container-fluid row service_page justify-content-center align-content-around pd-t-70'>
        <div className = 'row col-12 justify-content-center'>
          <h1>{props.navigation.bufferService.name}</h1>
          <p className = 'mg-t-25'>{props.navigation.bufferService.description}</p>
        </div>
        <img src = {image} alt = 'Service' className = 'service_image'></img>
        <div  className = 'row col-12 justify-content-center'>
          <button onClick = {handleClick} className = 'button_project button_project--light'>
            ORDER FOR ${props.navigation.bufferService.price}
          </button>
        </div>
      </div>
    )
}