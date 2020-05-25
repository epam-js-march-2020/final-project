import React, { useEffect, useState } from 'react';
import { createPortal } from "react-dom";
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserAppointments = (props) => {
//     const [t] = useTranslation();
//     const [currentUser, setCurrentUser] = useState({});

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
            <Modal.Title>{props.user.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service</th>
                        <th>Date & Time</th>
                        <th>Cancel</th>
                    </tr>
                    {/* {!(Object.keys(currentUser).length === 0 && currentUser.constructor === Object) ? currentUser.services.map((service, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{service.name}</td>
                            <td>{service.time}</td>
                            <td><Button>Remove</Button></td>
                        </tr>
                    )) : null} */}
                </thead>
                </Table>
            </Modal.Body>
        </Modal>
    );
}

export default UserAppointments;
