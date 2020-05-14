import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';


export class Footer extends React.Component {
    render() {
        return (
            <>
                <hr />
                <Row>
                    <Col md="8" sm="8">
                        <p className='p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo obcaecati ut vero placeat. Deserunt dolorem tempora asperiores. Nobis esse cum ipsam assumenda? Distinctio eum quibusdam ab velit reiciendis. Rerum.</p>
                    </Col>
                    <Col md="4" sm="4">
                        <Nav className="flex-column text-center text-lg-right text-md-right text-sm-right">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About us</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                            <Nav.Link href="#appointment">Make an appointment</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <hr />
                <div className="text-center">
                    <p className="mb-0">
                        Barbershop © 2020 All Rights Reserved
                    </p>
                    <p>
                        Developed by 
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/krivoruchkoND">
                            Krivoruchko Nikita
                        </a>
                    </p>
                </div>
            </>
        )
    }
}
