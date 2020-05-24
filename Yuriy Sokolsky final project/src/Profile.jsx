import React from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import $ from "jquery";
import "./componentStyles/ProfileContent.css";
import LoginLogonForm from "./components/LoginLogonForm.jsx";
import Alert from "react-bootstrap/Alert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="ProfilePageBackground">
          <Container>
            {!this.props.isAuth && (
              <LoginLogonForm
                handleLoginLogout={this.props.handleLoginLogout}
                setData={this.props.setData}
              />
            )}
            {this.props.isAuth && (
              <ProfileLoggedIn
                userData={this.props.userData}
                setData={this.props.setData}
              />
            )}
          </Container>
        </div>
      </>
    );
  }
}

export class ProfileLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userData.name || "",
      surname: this.props.userData.surname || "",
      email: this.props.userData.email || "",
      phone: this.props.userData.phone || "",
      disableButtons: false,
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
        url: "/updateProfile/",
        type: "POST",
        data: JSON.stringify({
          login: this.props.userData.login,
          password: this.props.userData.password,
          name: this.state.name,
          surname: this.state.surname,
          phone: this.state.phone,
          email: this.state.email,
        }),
        contentType: "application/json",
        dataType: "json",
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
                  onChange={(phone) => this.setState({ phone })}
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
          <Col></Col>
        </Row>
      </>
    );
  }
}
