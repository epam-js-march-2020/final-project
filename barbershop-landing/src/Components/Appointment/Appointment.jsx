import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import menHaircut from './icons/menHaircut.svg';
import womenHaircut from './icons/womenHaircut.svg';
import hairStyling from './icons/hairStyling.svg';
import hairDyeing from './icons/hairDyeing.svg';
import beardStyling from './icons/beardStyling.svg';

const Appointment = () => {
  const [t] = useTranslation();
  return (
    <Container>
      <h3 className="text-center">{t('appointment.title')}</h3>
      <Row className="justify-content-around">
        <Card style={{ width: '10rem' }} className="pt-2 m-2">
          <Card.Img variant="top" src={menHaircut} />
          <Card.Title className="text-center mt-2">{t('appointment.man')}</Card.Title>
        </Card>
        <Card style={{ width: '10rem' }} className="pt-2 m-2">
          <Card.Img variant="top" src={womenHaircut} />
          <Card.Title className="text-center mt-2">{t('appointment.woman')}</Card.Title>
        </Card>
        <Card style={{ width: '10rem' }} className="pt-2 m-2">
          <Card.Img variant="top" src={hairStyling} />
          <Card.Title className="text-center mt-2">{t('appointment.styling')}</Card.Title>
        </Card>
        <Card style={{ width: '10rem' }} className="pt-2 m-2">
          <Card.Img variant="top" src={hairDyeing} />
          <Card.Title className="text-center mt-2">{t('appointment.dyeing')}</Card.Title>
        </Card>
        <Card style={{ width: '10rem' }} className="pt-2 m-2">
          <Card.Img variant="top" src={beardStyling} />
          <Card.Title className="text-center mt-2">{t('appointment.beard')}</Card.Title>
        </Card>
      </Row>
    </Container>
  );
}

export default Appointment;
