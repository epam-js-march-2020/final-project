import React from 'react';

class Button extends React.Component {
    render(){
    return (
        <button type={this.props.type} onClick={this.props.onClick} className='button'>{this.props.buttonText}</button>
    );
}
}

export default Button;