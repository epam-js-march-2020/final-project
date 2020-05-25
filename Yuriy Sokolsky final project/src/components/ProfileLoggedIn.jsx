import React from "react";
import $ from "jquery";
import {isBefore, parseISO} from "date-fns";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import {AppointmentsRender} from './AppointmentsRender.jsx'

export class ProfileLoggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.userData.name || "",
            surname: this.props.userData.surname || "",
            email: this.props.userData.email || "",
            phone: this.props.userData.phone || "",
            disableButtons: false,
            appointments: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
        this.cancelAppointment = this.cancelAppointment.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }

    componentDidMount() {
        this.getAppointments();
    }

    getAppointments() {
        $.when(
            $.ajax({
                url: "/api/appointments/search-by-user?userID=" + this.props.userData.id,
                type: "GET",
                contentType: "text/plain",
                dataType: "json",
                processData: false,
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.setState({
                    appointments: data,
                    disableButtons:false
                });
            }.bind(this)
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userData !== this.props.userData) {
            this.setState({
                name: this.props.userData.name,
                surname: this.props.userData.surname,
                email: this.props.userData.email,
                phone: this.props.userData.phone,
            });
        }
    }

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    saveUserData(event) {
        this.setState({
            disableButtons: true,
        });
        event.preventDefault();
        $.when(
            $.ajax({
                url:
                    "/api/update-profile?name=" +
                    this.state.name +
                    "&surname=" +
                    this.state.surname +
                    "&phone=" +
                    this.state.phone +
                    "&email=" +
                    this.state.email,
                type: "PUT",
                contentType: "text/plain",
                dataType: "json",
                processData: false,
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.props.setData(data);
                this.setState({
                    disableButtons: false,
                });
            }.bind(this)
        );
    }

    cancelAppointment(masterID, userID, serviceID, date, time) {
        this.setState({
            disableButtons:true
        })
        $.when(
            $.ajax({
                url:
                    "/api/appointment/delete?" +
                    $.param({
                        masterID: masterID,
                        userID: userID,
                        serviceID: serviceID,
                        date: date,
                        time: time,
                    }),
                type: "DELETE",
                contentType: "text/plain",
                dataType: "json",
                processData: false,
            })
        )
            .then(
                function () {
                    this.getAppointments();
                }.bind(this)

            )

    }

    render() {

        return (
            <>
                <Row>
                    <Col className="text-center">
                        <h4>
                            Привет,
                            {this.props.userData.name != "" ? (
                                <span> {this.props.userData.name}</span>
                            ) : (
                                <span> заполни профиль!)</span>
                            )}
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupUserName">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите имя"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupUserSurname">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите фамилию"
                                    value={this.state.surname}
                                    name="surname"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupUserEmail">
                                <Form.Label>Email адресс</Form.Label>
                                <Form.Control
                                    type="email"
                                    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                                    name="email"
                                    placeholder="Введите email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupUserPhone">
                                <Form.Label>Мобильный телефон</Form.Label>
                                <PhoneInput
                                    country={"ru"}
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={(phone) => this.setState({phone})}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={this.saveUserData}
                                disabled={this.state.disableButtons}
                            >
                                Сохранить
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <h5>Предстоящие сеансы:</h5>
                                </Col>
                            </Row>

                            <AppointmentsRender appointments={this.state.appointments} cancelAppointment={this.cancelAppointment} disableButtons={this.state.disableButtons}/>
                        </Container>
                    </Col>
                </Row>
            </>
        );
    }
}