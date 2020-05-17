import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationMap from '../LocationMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Contacts.css';

const Contacts = () => {
  const [t] = useTranslation();
  return (
    <Container>
      <Row>
        <Col md="7" sm="6">
          <LocationMap t={t}/>
          <h5 className="text-center my-3">{t('contacts.contact')}</h5>
          <p className="text-center">{t('contacts.email')}: {t('contacts.emailAddress')}</p>
          <p className="text-center">{t('contacts.phone')}: {t('contacts.phoneNumber')}</p>
        </Col>
        <Col md="5" sm="6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">{t('contacts.day')}</th>
                <th scope="col">{t('contacts.time')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('contacts.mon')}</td>
                <td>{t('contacts.closed')}</td>
              </tr>
              <tr>
                <td>{t('contacts.tue')}</td>
                <td>{t('contacts.hours')}</td>
              </tr>
              <tr>
                <td>{t('contacts.wed')}</td>
                <td>{t('contacts.closed')}</td>
              </tr>
              <tr>
                <td>{t('contacts.thu')}</td>
                <td>{t('contacts.hours')}</td>
              </tr>
              <tr>
                <td>{t('contacts.fri')}</td>
                <td>{t('contacts.hours')}</td>
              </tr>
              <tr>
                <td>{t('contacts.sat')}</td>
                <td>{t('contacts.hours')}</td>
              </tr>
              <tr>
                <td>{t('contacts.sun')}</td>
                <td>{t('contacts.hours')}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
