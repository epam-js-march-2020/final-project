import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';

import menHaircut from './icons/menHaircut.svg';
import womenHaircut from './icons/womenHaircut.svg';
import hairStyling from './icons/hairStyling.svg';
import hairDyeing from './icons/hairDyeing.svg';
import beardStyling from './icons/beardStyling.svg';

import 'react-datepicker/dist/react-datepicker.css';

const ProductModal = (props) => {
  const [t] = useTranslation();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton >
        <Modal.Title>{props.service.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="mb-3">{t('appointment.selectTime')}</h4>
        <DatePicker
          selected={startDate}
          todayButton="Today"
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">{t('appointment.confirm')}</Button>
        <Button variant="secondary" onClick={props.handleClose}>{t('appointment.cancel')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Appointment = (props) => {
  const [t] = useTranslation();
  const [selectedService, setSelectedService] = useState({});

  const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (service) => {
    if (isEmpty(props.currentUser)) {
      alert("You must login first")
    } else {
      setShowModal(true);
      setSelectedService(service)
    }
  }
  const handleCloseModal = () => setShowModal(false)

  const services = [
    { name: t('appointment.man'), image: menHaircut },
    { name: t('appointment.woman'), image: womenHaircut },
    { name: t('appointment.styling'), image: hairStyling },
    { name: t('appointment.dyeing'), image: hairDyeing },
    { name: t('appointment.beard'), image: beardStyling }
  ]
  return (
    <Container>
      <h3 className="text-center">{t('appointment.title')}</h3>
      <Row className="justify-content-around">
        { services.map((service, i) => (
          <Card style={{ width: '10rem' }} className="pt-2 m-2" key={i} onClick={() => handleShowModal(service)}>
            <Card.Img variant="top" src={service.image} />
            <Card.Title className="text-center mt-2">{service.name}</Card.Title>
          </Card>
        )) }
      </Row>
      <ProductModal show={showModal} handleClose={handleCloseModal} service={selectedService}/>
    </Container>
  );
}

export default Appointment;
