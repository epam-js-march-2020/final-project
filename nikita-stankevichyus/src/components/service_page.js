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
      <div className = 'container-fluid row service_page justify-content-center align-content-around'>
        <div className = 'row col-12 justify-content-center'>
          <h1>{this.props.bufferService.name}</h1>
          <p className = 'mg-t-25'>{this.props.bufferService.description}</p>
        </div>
        <div  className = 'row col-12 justify-content-center'>
          <button onClick = {this.handleClick} className = 'button_project button_project--light'>ORDER FOR ${this.props.bufferService.price}</button>
        </div>
      </div>
    )
  }
}