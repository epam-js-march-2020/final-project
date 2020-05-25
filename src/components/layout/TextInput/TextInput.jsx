import React from 'react';
import './TextInput.css';

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
            <label htmlFor={ name } className="label">{ title }</label>
            <input 
            type={ type }
            name = { name } 
            className="input"  
            placeholder={ placeholder } 
            value={ value }  
            onChange={ onChange }/>
        </div>
    )
    }

export default TextInput;
