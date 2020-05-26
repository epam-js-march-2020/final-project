import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faInstagramSquare,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import "../componentStyles/Footer.css";

import {NameOfBusiness,LogoImgURL,PhoneOfBusiness,EmailOfBusiness,SocialsNetworks} from "../consts.js"

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footerContainer">
        <Container>
          <Row className="pt-2">
            <Col className="text-center">
              <img
                height="25%"
                className="HeaderImageBackground"
                src={LogoImgURL}
                alt="Logo"
              />
              <div>Yuriy © 2020</div>
            </Col>
            <Col className="text-center">
              <div>{NameOfBusiness}</div>
              <div><a href={"tel:" + PhoneOfBusiness} className="text-info">📞 {PhoneOfBusiness}</a></div>
              <div><a href={"mailto:" + EmailOfBusiness} className="text-info">📧 {EmailOfBusiness}</a> </div>
            </Col>
            <Col className="text-center">
              <div><a href={"https://www.vk.com" + SocialsNetworks.VK}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faVk } size="1x" /> {SocialsNetworks.VK}</a></div>
              <div><a href={"https://www.instagram.com" + SocialsNetworks.INSTAGRAM}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faInstagramSquare } size="lg" /> {SocialsNetworks.INSTAGRAM}</a></div>
              <div><a href={"https://www.facebook.com" + SocialsNetworks.FACEBOOK}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faFacebookSquare } size="lg" /> {SocialsNetworks.FACEBOOK}</a></div></Col>
          </Row>
        </Container>
      </div>
    );
  }
};