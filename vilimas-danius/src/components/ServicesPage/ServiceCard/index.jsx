import React, { Component } from 'react';

import './ServiceCard.scss';

import { connect } from 'react-redux';
import BookButton from './bookButton';

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }
  render() {
    return (
      <div className='card mb-4'>
        <img src={this.props.item.image} className='card-img-top' alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.item.name}</h5>
          <p className='card-text'>{this.props.item.desc}</p>
          <BookButton service={this.props.item.name} />
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(ServiceCard);
