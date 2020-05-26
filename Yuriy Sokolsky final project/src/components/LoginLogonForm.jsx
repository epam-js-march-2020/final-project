import React from "react";
import $ from "jquery";

import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";
import "../componentStyles/ProfileContent.css";

export default class LoginLogonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginFailAlert: false,
      loginValue: "",
      passwordValue: "",
      errorMessage: "",
      disableButtons: false,
      success: false,
      clickedButton: "none",
    };
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registration = this.registration.bind(this);
    this.disableButtons = this.disableButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login() {
    this.disableButtons();

    $.when(
      $.ajax({
        url: "/api/login/",
        type: "POST",
        data: JSON.stringify({
          login: this.state.loginValue,
          password: this.state.passwordValue,
        }),
        contentType: "application/json",
        dataType: "json",
      })
    ).then(
      function (data, textStatus, jqXHR) {
        if (typeof data == "string") {
          this.setState({
            errorMessage: data,
            showLoginFailAlert: true,
            disableButtons: false,
          });
        } else {
          this.setState({
            success: true,
          });
          this.props.handleLoginLogout();
          this.props.setData(data);
        }
      }.bind(this)
    );
  }

  registration() {
    this.disableButtons();
    $.when(
      $.ajax({
        url: "/api/registration/",
        type: "POST",
        data: JSON.stringify({
          login: this.state.loginValue,
          password: this.state.passwordValue,
        }),
        contentType: "application/json",
        dataType: "json",
      })
    ).then(
      function (data, textStatus, jqXHR) {
        if (typeof data == "string") {
          this.setState({
            errorMessage: data,
            showLoginFailAlert: true,
            disableButtons: false,
          });
        } else {
          this.props.setData(data);
          this.props.handleLoginLogout();
          this.setState({
            success: true,
          });
        }
      }.bind(this)
    );
  }

  disableButtons() {
    this.setState({
      disableButtons: true,
    });
  }
  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  handleSubmit(event) {
      event.preventDefault();
    if (this.state.clickedButton === "registration") this.registration();
    else if (this.state.clickedButton === "login") this.login();
  }
  render() {
    return (
      <>
        <Alert
          show={this.state.showLoginFailAlert}
          onClose={() =>
            this.setState({
              showLoginFailAlert: false,
            })
          }
          variant="danger"
          dismissible
        >
          <Alert.Heading>{this.state.errorMessage}</Alert.Heading>
          <p>Проверьте правильность введенных данных</p>
        </Alert>
        {!this.state.success && (
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div className="text-center">
                  Введите логин и пароль, или придумайте если вы здесь впервые
                </div>
                <Form onSubmit={ this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Введите Логин с учетом регистра "
                      name="loginValue"
                      value={this.state.loginValue}
                      onChange={this.handleInputChange}
                      required={true}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Пароль"
                      name="passwordValue"
                      value={this.state.passwordValue}
                      onChange={this.handleInputChange}
                      required={true}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      {" "}
                      <Button
                        variant="primary"
                        type="submit"
                        name="registration"
                        disabled={this.state.disableButtons}
                        onClick={() =>
                          this.setState({
                            clickedButton: "registration",
                          })
                        }
                      >
                        Зарегестрироваться
                      </Button>
                    </Col>
                    <Col className="text-right">
                      <Button
                        variant="primary"
                        type="submit"
                        name="login"
                        disabled={this.state.disableButtons}
                        onClick={() =>
                          this.setState({
                            clickedButton: "login",
                          })
                        }
                      >
                        Войти
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.success && <div> Успешная авторизация!</div>}
      </>
    );
  }
}