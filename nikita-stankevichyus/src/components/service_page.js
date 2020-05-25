import React from 'react';
import image from '../images/shaving.jpg'

export class ServicePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    // Dispatching action
    this.props.toAddService(this.props.name);
  }
  
  render() {
    return (
      <div className = 'container-fluid row service_page justify-content-center align-content-around pd-t-70'>
        <div className = 'row col-12 justify-content-center'>
          <h1>{this.props.navigation.bufferService.name}</h1>
          <p className = 'mg-t-25'>{this.props.navigation.bufferService.description}</p>
        </div>
        <img src = {image} alt = 'Service' className = 'service_image'></img>
        <div  className = 'row col-12 justify-content-center'>
          <button onClick = {this.handleClick} className = 'button_project button_project--light'>ORDER FOR ${this.props.navigation.bufferService.price}</button>
        </div>
      </div>
    )
  }
}