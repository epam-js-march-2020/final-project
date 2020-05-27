import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentStyles/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import {LogoImgURL} from "../consts.js"
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Container
          fluid
          className="pt-3 border-bottom pb-3 position-fixed HeaderContainer"
        >
          <Row>
            <Col md="auto" style={{ width: 90 }}>
              <img
                width={128}
                height={81}
                className="mr-3 position-absolute HeaderImageBackground"
                src={LogoImgURL}
                alt="Logo"
              />
            </Col>
            <Col>
              <Row>
                <Col className="text-right">
                  <Link to="/" className="text-light">
                    Главная
                  </Link>
                </Col>
                <Col>
                  <Link to="/services" className="text-light">
                    Услуги
                  </Link>
                </Col>
                <Col className="text-left">
                  <Link to="/about" className="text-light">
                    О нас
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md="auto" className="text-right">
              <Link to="/profile" className="text-light">
                Кабинет
                {" "}
                {!this.props.isAuth && (
                  <FontAwesomeIcon icon={faSignInAlt} size="lg" />
                )}
              </Link>{" "}
              {this.props.isAuth && (
                <FontAwesomeIcon
                  onClick={this.props.handleLoginLogout}
                  icon={faSignOutAlt}
                  size="lg"
                  style={{ cursor: "pointer" }}
                />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};