import React from 'react';

export class Service extends React.PureComponent{
  constructor(props) {
    super(props);
    this.addService = this.addService.bind(this);
  }

  addService = () => {
    if (this.props.user.loged) {
      this.props.addService(this.props.name, this.props.price);

      let user = localStorage.getItem(this.props.user.email);
      user = JSON.parse(user);
      user.services.push({
        name: this.props.name,
        price: this.props.price,
        date: '123',
      })

      user = JSON.stringify(user);

      localStorage[this.props.user.email] = user;

    } else {
      alert('You should log in first!');
    }
  }

  render() {
  return(
    <tr>
        <td className = 'text-color-light align-middle'>{this.props.name}</td>
        <td className = 'text-color-light align-middle'>${this.props.price}</td>
        <td className = 'text-color-light'>
          <button 
            onClick = {this.addService} 
            className = 'btn btn-light'>
              Request
          </button>
        </td>
    </tr>
  )
  }
}