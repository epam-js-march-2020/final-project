import React from 'react';
import { useTranslation } from 'react-i18next';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavList from '../NavList/NavList';

const Footer = () => {
    const [t] = useTranslation();
    return (
        <>
            <hr />
            <Row>
                <Col md="8" sm="8">
                    <p className='p-3'>{t('footer.content')}</p>
                </Col>
                <Col md="4" sm="4">
                    <NavList className="flex-column text-center text-lg-right text-md-right text-sm-right" />
                </Col>
            </Row>
            <hr />
            <div className="text-center">
                <p className="mb-0">
                    {t('footer.copyright')}
                </p>
                <p>
                    {t('footer.developed')}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/krivoruchkoND">
                        {t('footer.author')}
                    </a>
                </p>
            </div>
        </>
    )
}

export default Footer;
