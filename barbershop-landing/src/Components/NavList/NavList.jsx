import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavList = (props) => {
    const [t] = useTranslation();
    return (
        <Nav className={props.className}>
            <Link className="btn btn-light m-1" to="/">{t('navList.home')}</Link>
            <Link className="btn btn-light m-1" to="/about">{t('navList.about')}</Link>
            <Link className="btn btn-light m-1" to="/gallery">{t('navList.gallery')}</Link>
            <Link className="btn btn-light m-1" to="/services">{t('navList.services')}</Link>
            <Link className="btn btn-light m-1" to="/contacts">{t('navList.contacts')}</Link>
            <Link className="btn btn-light m-1" to="/appointment">{t('navList.appointment')}</Link>
        </Nav>
    );
}

export default NavList;
