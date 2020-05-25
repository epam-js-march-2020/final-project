import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export class Service extends React.PureComponent{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {

    // Dispatching action
    this.props.toService({
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
      photo: this.props.photo,
    })
  }

  render() {
  return(
    
    <tr onClick = {this.handleClick} className = 'service'>
     
        <td className = 'text-color-light align-middle'>
          <Link to={'service_'+this.props.name}>{this.props.name}</Link>
        </td>
        <td className = 'text-color-light align-middle'>
          <Link to={'service_'+this.props.name}>${this.props.price}</Link>
        </td>
     
    </tr>
  )
  }
}