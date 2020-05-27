import React from "react";
import $ from "jquery";
import {Button, Col, Form, Row} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import {Link} from "react-router-dom";

export class ProfileLoggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.userData.name || "",
            surname: this.props.userData.surname || "",
            email: this.props.userData.email || "",
            phone: this.props.userData.phone || "",
            Loading:true,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveUserData = this.saveUserData.bind(this);

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
            function (data) {
                this.props.setData(data);
                this.setState({
                    disableButtons: false,
                });
            }.bind(this)
        );
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
                        <Form onSubmit={this.saveUserData}>
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
                                variant="outline-light"
                                type="submit"
                                disabled={this.state.disableButtons}
                            >
                                Сохранить
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Row className="h-100 ">
                            <Col className="text-center my-auto">
                                <Link to={`/user-appointments`} className="btn btn-outline-light">
                                    Просмотор предстоящик сеансов
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}