import React from 'react';

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
    })
  }

  render() {
  return(
    <tr onClick = {this.handleClick} className = 'service'>
        <td className = 'text-color-light align-middle'>{this.props.name}</td>
        <td className = 'text-color-light align-middle'>${this.props.price}</td>
        <td className = 'text-color-light'>
        </td>
    </tr>
  )
  }
}