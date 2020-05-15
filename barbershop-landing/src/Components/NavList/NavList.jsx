import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';

const NavList = (props) => {
    const [t] = useTranslation();
    return (
        <Nav className={props.className}>
            <Nav.Link href="#home">{t('navList.home')}</Nav.Link>
            <Nav.Link href="#about">{t('navList.about')}</Nav.Link>
            <Nav.Link href="#gallery">{t('navList.gallery')}</Nav.Link>
            <Nav.Link href="#services">{t('navList.services')}</Nav.Link>
            <Nav.Link href="#contacts">{t('navList.contacts')}</Nav.Link>
            <Nav.Link href="#appointment">{t('navList.appointment')}</Nav.Link>
        </Nav>
    );
}

export default NavList;
