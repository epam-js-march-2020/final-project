import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import userIcon from './user.svg';

export class Header extends React.Component {
    CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
          {children}
        </span>
      ));

    render() {
        return (
            <Navbar collapseOnSelect expand="md" className="flex-md-row-reverse">
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle"/>
                <Navbar.Brand className="d-md-none">
                    Barbershop
                </Navbar.Brand>
                <Dropdown drop={'left'}>
                    <Dropdown.Toggle as={this.CustomToggle} id="dropdown-custom-components">
                    <img src={userIcon} alt="login icon" className="login-icon"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/signIn">Sign In</Dropdown.Item>
                    <Dropdown.Item href="#/userAppointments">My appointments</Dropdown.Item>
                    <Dropdown.Item href="#/userSettings">Settings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                        <Nav.Link href="#appointment">Make an appointment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};