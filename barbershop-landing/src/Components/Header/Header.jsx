import React, { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavList from '../NavList/NavList';
import SignIn from '../SignIn/SignIn';

import userIcon from './user.svg';

import './Header.css';

const LanguageToggle = () => {
    const [lang, setLang] = useState('ru');
    const toggleLang = () => {
        lang === 'en' ? setLang('ru') : setLang('en');
        i18n.changeLanguage(lang);
    };
    return (
        <div className="switch mr-2">
            <input type="radio" name="switch" id="switch--left" onChange={toggleLang}/>
            <input type="radio" name="switch" id="switch--right" onChange={toggleLang}/>
            <label htmlFor="switch--left">EN</label>
            <label htmlFor="switch--right">RU</label>
            <span className="toggle"></span>
        </div>
    )
}

const Header = () => {
    const [t] = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
            {children}
        </span>
    ));
    
    return (
        <>
            <Navbar collapseOnSelect expand="md" className="flex-md-row-reverse px-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle"/>
                <Navbar.Brand className="d-md-none mx-1">
                    {t('header.brand')}
                </Navbar.Brand>
                <div className="d-flex align-items-center">
                    <LanguageToggle />
                    <Dropdown drop={'left'}>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                            <img src={userIcon} alt="login icon" className="login-icon"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={toggleModal}>{t('header.signIn')}</Dropdown.Item>
                            <Dropdown.Item href="#/userAppointments">{t('header.userAppointments')}</Dropdown.Item>
                            <Dropdown.Item href="#/userSettings">{t('header.userSettings')}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <SignIn show={showModal} handleClose={toggleModal}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavList />
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </>
    );
};

export default Header;
