import React from 'react';

export class Service extends React.PureComponent{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.toService({
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
    })
  }

  render() {
  return(
    <tr>
        <td className = 'text-color-light align-middle'>{this.props.name}</td>
        <td className = 'text-color-light align-middle'>${this.props.price}</td>
        <td className = 'text-color-light'>
          <button 
            onClick = {this.handleClick} 
            className = 'btn btn-light'>
              See more
          </button>
        </td>
    </tr>
  )
  }
}