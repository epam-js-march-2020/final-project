import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './SignIn.css';

const SignIn = (props) => {
    const [t] = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const jsonBin = {
        root: 'https://api.jsonbin.io',
        binId: '5ec5b7d7bbaf1f258943dec4', 
        binVersion: 'latest',
        key: '$2b$10$ltjATMhqY0JfYN5Mi1k1nOVTEQIGJwabv1R6Fb9CUjOUl7jTe6PwG',
    };

    async function fetchUserData(userData) {
        console.log('fetchUsersData');
        let users = [];
        const response = await fetch([jsonBin.root, 'b', jsonBin.binId, jsonBin.binVersion].join('/'), {
            type: 'GET',
            headers: {
                'secret-key': jsonBin.key,
            },
        });
        await response
            .json()
            .then(res => {
                users = [...res, userData];
            });

        await fetch([jsonBin.root, 'b', jsonBin.binId].join('/'), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'secret-key': jsonBin.key,
            },
            body: JSON.stringify(users)
        })
        .then(() => document.querySelector('#submitRegistration').disabled = true);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePass = (e) => {
        setPass(e.target.value);
        const registerPasswordConfirm = document.querySelector('#registerPasswordConfirm');
        const submitRegistration = document.querySelector('#submitRegistration');
        if (e.target.value !== registerPasswordConfirm.value) {
            registerPasswordConfirm.classList.add('border', 'border-danger');
            e.target.classList.add('border', 'border-danger');
            submitRegistration.disabled = true;
        } else {
            registerPasswordConfirm.classList.remove('border', 'border-danger');
            e.target.classList.remove('border', 'border-danger');
            submitRegistration.disabled = false;
        }
    };

    const handlePassConfirm = (e) => {
        const submitRegistration = document.querySelector('#submitRegistration');
        const registerPassword = document.querySelector('#registerPassword');
        if (e.target.value !== pass) {
            registerPassword.classList.add('border', 'border-danger');
            e.target.classList.add('border', 'border-danger');
            submitRegistration.disabled = true;
        } else {
            registerPassword.classList.remove('border', 'border-danger');
            e.target.classList.remove('border', 'border-danger');
            submitRegistration.disabled = false;
        }
    }

    const registrationSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, pass };
        fetchUserData(user);
    };

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>{t('signIn.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="create" className="flex-row">
                    <Tab eventKey="create" title={t('signIn.createTab')}>
                        <Form id="registrationForm" onSubmit={registrationSubmit}>
                            <Form.Group controlId="registerName" className="mt-2">
                                <Form.Label>{t('signIn.name')}</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={handleName} required/>
                            </Form.Group>
                            <Form.Group controlId="registerEmail">
                                <Form.Label>{t('signIn.email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} required/>
                            </Form.Group>
                            <Form.Group controlId="registerPassword">
                                <Form.Label>{t('signIn.password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handlePass} required/>
                            </Form.Group>
                            <Form.Group controlId="registerPasswordConfirm">
                                <Form.Label>{t('signIn.passwordConfirm')}</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" onChange={handlePassConfirm} required/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mr-2" id="submitRegistration">
                                {t('signIn.createTab')}
                            </Button>
                            <Button variant="secondary" onClick={props.handleClose}>
                                {t('signIn.close')}
                            </Button>
                        </Form>
                    </Tab>

                    <Tab eventKey="signIn" title={t('signIn.signInTab')}>
                        <Form id="signInForm">
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
