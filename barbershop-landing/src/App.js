import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import userIcon from './user.svg';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Gallery</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">Store</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Make an appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        Barbershop
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <img src={userIcon} alt="login icon" className="img-fluid login-icon"/>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

function App() {
  return (
    <>
    <Container>
      <Header />
    </Container>
    </>
  );
}

export default App;
