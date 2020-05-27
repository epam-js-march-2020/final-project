import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//import { loadUsers } from '../../Actions'

import './SignIn.css';

const SignIn = (props) => {
    const [t] = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [users, setUsers] = useState([]);

    const jsonBin = {
        root: 'https://api.jsonbin.io',
        binId: '5ec5b7d7bbaf1f258943dec4', 
        binVersion: 'latest',
        key: '$2b$10$ltjATMhqY0JfYN5Mi1k1nOVTEQIGJwabv1R6Fb9CUjOUl7jTe6PwG'
    };

    async function getUsersData() {
        const response = await fetch([jsonBin.root, 'b', jsonBin.binId, jsonBin.binVersion].join('/'), {
            method: 'GET',
            headers: {
                'secret-key': jsonBin.key
            }
        });
        await response
            .json()
            .then(res => {
                console.log("All registred users: ",res)
                setUsers(res)
            });
    };

    async function updateUsersData(user) {
        const response = await fetch([jsonBin.root, 'b', jsonBin.binId].join('/'), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'secret-key': jsonBin.key
            },
            body: JSON.stringify([...users, { email: user.email, pass: user.pass, id: user.id }])
        });
        await response
            .json()
            .then(res => {
                console.log("All registred users after update: ", res.data)
                setUsers(res.data)
            });
    };

    async function createNewUser(user) {
        user.services = [];
        const response = await fetch([jsonBin.root, 'b'].join('/'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'secret-key': jsonBin.key
            },
            body: JSON.stringify(user)
        });
        await response
            .json()
            .then(res => user.id = res.id)
            .then(() => {
                console.log("New created user: ", user)
                updateUsersData(user)
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
            submitRegistration.disabled = true;
        } else {
            registerPasswordConfirm.classList.remove('border', 'border-danger');
            submitRegistration.disabled = false;
        }
    };

    const handlePassConfirm = (e) => {
        const submitRegistration = document.querySelector('#submitRegistration');
        if (e.target.value !== pass) {
            e.target.classList.add('border', 'border-danger');
            submitRegistration.disabled = true;
        } else {
            e.target.classList.remove('border', 'border-danger');
            submitRegistration.disabled = false;
        }
    }

    useEffect(() => {
        getUsersData();
// eslint-disable-next-line
    }, []);

    const registrationSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, pass };
        const noSuchUser = users.filter((u) => u.email === user.email).length === 0;
        if (noSuchUser) {
            createNewUser(user);
        } else {
            alert('Email already used!')
        }
    };

    const signInSubmit = (e) => {
        e.preventDefault();
        const user = { email, pass };
        const loggedUser = users.filter((u) => u.email === user.email && u.pass === user.pass);
        if (loggedUser.length === 1) {
            props.setCurrentUser(loggedUser[0]);
            props.handleClose();
        } else {
            alert('Login error')
        }
    };

    const clearFields = () => {
        setEmail("");
        setPass("");
        setName("");
        document.querySelector('#registerPasswordConfirm').value = "";
    };

    return(
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>{t('signIn.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="create" className="flex-row"  onSelect={clearFields}>
                    <Tab eventKey="create" title={t('signIn.createTab')}>
                        <Form id="registrationForm" onSubmit={registrationSubmit}>
                            <Form.Group controlId="registerName" className="mt-2">
                                <Form.Label>{t('signIn.name')}</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={handleName} value={name} required/>
                            </Form.Group>
                            <Form.Group controlId="registerEmail">
                                <Form.Label>{t('signIn.email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} value={email} required/>
                            </Form.Group>
                            <Form.Group controlId="registerPassword">
                                <Form.Label>{t('signIn.password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handlePass} value={pass} required/>
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
                        <Form id="signInForm" onSubmit={signInSubmit}>
                            <Form.Group controlId="signInEmail" className="mt-2">
                                <Form.Label>{t('signIn.email')}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail}/>
                            </Form.Group>
                            <Form.Group controlId="signInPassword">
                                <Form.Label>{t('signIn.password')}</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={pass} onChange={handlePass}/>
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
