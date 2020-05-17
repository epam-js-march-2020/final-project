import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './NavList.css';

const NavList = (props) => {
    const [t] = useTranslation();
    return (
        <Nav className={props.className}>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/">
                    {t('navList.home')}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/about">
                    {t('navList.about')}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/gallery">
                    {t('navList.gallery')}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/services">
                    {t('navList.services')}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/contacts">
                    {t('navList.contacts')}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="btn btn-light m-1 p-0">
                <Nav.Link className="link-color" eventKey="1" as={Link} to="/appointment">
                    {t('navList.appointment')}
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavList;
