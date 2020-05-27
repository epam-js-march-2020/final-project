import React, { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavList from '../NavList/NavList';
import SignIn from '../SignIn/SignIn';
import UserAppointments from '../UserAppointments/UserAppointments';

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

const Header = (props) => {
    const [t] = useTranslation();

    const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

    const [showSignModal, setShowSignModal] = useState(false);
    const [showAppointModal, setShowAppointModal] = useState(false);

    const toggleSignModal = () => setShowSignModal(!showSignModal);
    const toggleAppointModal = () => {
        if(isEmpty(props.currentUser)) {
            toggleSignModal();
        } else {
            setShowAppointModal(!showAppointModal)
        }
    };

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
                            {
                                isEmpty(props.currentUser) ? 
                                <Dropdown.Item onClick={toggleSignModal}>{t('header.signIn')}</Dropdown.Item> : 
                                <Dropdown.Item>{t('header.signInAs')} {props.currentUser.name}</Dropdown.Item>
                            }
                            <Dropdown.Item onClick={toggleAppointModal}>{t('header.userAppointments')}</Dropdown.Item>
                            <Dropdown.Item href="#/userSettings">{t('header.userSettings')}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <SignIn show={showSignModal} handleClose={toggleSignModal} setCurrentUser={props.setCurrentUser}/>
                <UserAppointments show={showAppointModal} handleClose={toggleAppointModal} currentUser={props.currentUser}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavList />
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </>
    );
};

export default Header;
