import React from "react";
import $ from "jquery";
import {
  NameOfBusiness,
  PhoneOfBusiness,
  AddressOfBusiness,
  EmailOfBusiness,
  SocialsNetworks,
  WorkHours,
  googleMaps
} from "./consts.js";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mastersList: [],
    };
  }

  componentDidMount() {
    $.when(
      $.ajax({
        url: "/api/masters",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
      })
    ).then(
      function (data, textStatus, jqXHR) {
        this.setState({ mastersList: data });
      }.bind(this)
    );
  }
  iframe() {
    return {
      __html: googleMaps,
    };
  }
  render() {
    return (
      <>
        <div className="profile-page-background">
          <Container>
            <Row className="text-center">
              <Col>
                <h2>{NameOfBusiness}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Мы находимся по адресу:</h5>
                <h5>{AddressOfBusiness}</h5>
                <h5>Время работы с {WorkHours.START_HOURS}:0{WorkHours.START_MINUTES} до {WorkHours.STOP_HOURS}:0{WorkHours.STOP_MINUTES}</h5>
                <h5>Запись закрывается в {WorkHours.END_OF_RECORDING}:0{WorkHours.STOP_MINUTES}</h5>
                <h5 className="text-center">Связаться:</h5>
                <h5>
                  По номеру телефона:{" "}
                  <a href={"tel:" + PhoneOfBusiness} className="text-info">
                    📞 {PhoneOfBusiness}
                  </a>
                </h5>
                <h5>
                  По почте:{" "}
                  <a href={"mailto:" + EmailOfBusiness} className="text-info">
                    📧 {EmailOfBusiness}
                  </a>{" "}
                </h5>
                <h5 className="text-center">Социальные сети:</h5>
                <h5>
                  <a
                    href={"https://www.vk.com" + SocialsNetworks.VK}
                    target="_blank"
                    className="text-secondary"
                  >
                    <FontAwesomeIcon icon={faVk} size="1x" />{" "}
                    {SocialsNetworks.VK}
                  </a>
                </h5>
                <h5>
                  <a
                    href={
                      "https://www.instagram.com" + SocialsNetworks.INSTAGRAM
                    }
                    target="_blank"
                    className="text-secondary"
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} size="lg" />{" "}
                    {SocialsNetworks.INSTAGRAM}
                  </a>
                </h5>
                <h5>
                  <a
                    href={"https://www.facebook.com" + SocialsNetworks.FACEBOOK}
                    target="_blank"
                    className="text-secondary"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size="lg" />{" "}
                    {SocialsNetworks.FACEBOOK}
                  </a>
                </h5>
              </Col>
              <Col>
                <h5 className="text-center"> Как к нам проехать:</h5>
                <div
                  id="map-container" style={{filter:'grayscale(100%)'}}
                  dangerouslySetInnerHTML={this.iframe()}
                ></div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
