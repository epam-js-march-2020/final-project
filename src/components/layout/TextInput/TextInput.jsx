import React from 'react';
// import classnames from 'classnames';
import './TextInput.css'

const TextInput = ({
    name, 
    type, 
    title,
    placeholder, 
    value, 
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="label">{title}</label>
            <input 
            type={ type }
            name = {name} 
            className="input"  
            placeholder={ placeholder } 
            value={ value } 
            onChange={onChange}/>
        </div>
    )
    }

    TextInput.defaultProps = {
        type: 'text'
      };
export default TextInput;
