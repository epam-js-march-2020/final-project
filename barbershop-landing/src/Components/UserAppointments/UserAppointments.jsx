import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserAppointments = (props) => {
    const [t] = useTranslation();

    const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>{t('userAppointments.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                <thead>
                    <tr>
                        <th>{t('userAppointments.number')}</th>
                        <th>{t('userAppointments.service')}</th>
                        <th>{t('userAppointments.time')}</th>
                        <th>{t('userAppointments.cancel')}</th>
                    </tr>
                    { isEmpty(props.currentUser) ? null : props.currentUser.services.map((service, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{service.name}</td>
                            <td>{service.time}</td>
                            <td><Button variant="warning">Remove</Button></td>
                        </tr>
                    ))}
                </thead>
                </Table>
                <Button className="mr-2">{t('userAppointments.save')}</Button>
                <Button onClick={props.handleClose} variant="secondary">{t('userAppointments.cancel')}</Button>
            </Modal.Body>
        </Modal>
    );
}

export default UserAppointments;
