import React from 'react';

const initialState = {
  
}

export class ServicePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toAddService(this.props.name);
  }
  
  render() {
    return (
      <div className = 'container mg-t-150'>
        <h1 className = 'row col-12'>{this.props.bufferService.name}</h1>
        <p className = 'row col-12'>{this.props.bufferService.description}</p>
        <h3 className = 'row col-12'>{this.props.bufferService.price}</h3>
        <button onClick = {this.handleClick} className = 'row col-12 btn btn-block btn-light'>Order</button>
      </div>
    )
  }
}