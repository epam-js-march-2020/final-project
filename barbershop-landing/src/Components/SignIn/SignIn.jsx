import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './SignIn.css';

const SignIn = (props) => {
    const [t] = useTranslation();

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>{t('signIn.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="create" className="flex-row">
                    <Tab eventKey="create" title={t('signIn.createTab')}>
                        <Form>
                            <Form.Group controlId="registerName" className="mt-2">
                                <Form.Label>{t('signIn.name')}</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="registerEmail">
                                <Form.Label>{t('signIn.email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="registerPassword">
                                <Form.Label>{t('signIn.password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="registerPasswordConfirm">
                                <Form.Label>{t('signIn.passwordConfirm')}</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-2">
                                {t('signIn.createTab')}
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                {t('signIn.close')}
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="signIn" title={t('signIn.signInTab')}>
                        <Form>
                            <Form.Group controlId="signInEmail" className="mt-2">
                                <Form.Label>{t('signIn.email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="signInPassword">
                                <Form.Label>{t('signIn.password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-2">
                                {t('signIn.signInTab')}
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                {t('signIn.close')}
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    );
}

export default SignIn;
