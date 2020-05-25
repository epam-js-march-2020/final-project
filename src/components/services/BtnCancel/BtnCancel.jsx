import React, { Component } from 'react'

class BtnCancel extends Component {
    render() {
        const { title } = this.props;
        const { name } = this.props.item;
        return (
           <button>
               {name}
           </button>
        )
    }
}

export default BtnCancel;
