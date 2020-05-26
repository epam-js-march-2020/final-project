import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export function Service(props){
  

  const handleClick = () => {

    // Dispatching action
    props.toService({
      name: props.name,
      price: props.price,
      description: props.description,
      photo: props.photo,
    })
  }

  
    return(
    
    <tr onClick = {handleClick} className = 'service'>
     
        <td className = 'text-color-light align-middle'>
          <Link to={'service_'+props.name}>{props.name}</Link>
        </td>
        <td className = 'text-color-light align-middle'>
          <Link to={'service_'+props.name}>${props.price}</Link>
        </td>
     
    </tr>
  )
  
}