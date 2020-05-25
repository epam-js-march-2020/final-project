import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';


const Button = ({name, link}) => {
    return (
    <div>
        <Link to={link}><button>{name}</button></Link>
    </div>  );
}
 
export default Button;