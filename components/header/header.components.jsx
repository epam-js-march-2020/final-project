import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <li>
              <Link to="/" class="link-scroll">About</Link>
            </li>
            <li>
              <Link to="/services" class="link-scroll">Services</Link>
            </li>
            <li>
              <Link to="/customer" class="link-scroll">Customer Area</Link>

            </li>
          </ul>
        </nav>
      </header>

    )
  }
}

export default Header;
