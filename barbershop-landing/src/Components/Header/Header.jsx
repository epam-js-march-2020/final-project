import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavList from '../NavList/NavList';
import SignIn from '../SignIn/SignIn';

import userIcon from './user.svg';

import './Header.css';

const Header = () => {
    const [t] = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
          {children}
        </span>
      ));
    return (
        <Navbar collapseOnSelect expand="md" className="flex-md-row-reverse px-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle"/>
            <Navbar.Brand className="d-md-none">
                {t('header.brand')}
            </Navbar.Brand>
            <Dropdown drop={'left'}>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <img src={userIcon} alt="login icon" className="login-icon"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow}>{t('header.signIn')}</Dropdown.Item>
                    <Dropdown.Item href="#/userAppointments">{t('header.userAppointments')}</Dropdown.Item>
                    <Dropdown.Item href="#/userSettings">{t('header.userSettings')}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <SignIn show={show} handleClose={handleClose}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavList />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
