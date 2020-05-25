import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faInstagramSquare,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import "../componentStyles/Footer.css";

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      LogoImgURL: "../images/logos/logoHairCut.png",
      NameOfBusiness: "Haircut by Yuriy",
      AddressOfBusiness: "г. Санкт-Петербург. ул. Пушкина д. 22",
      PhoneOfBusiness:"8(333) 333-22-22",
      EmailOfBusiness:"contact@Hcut.ru",
      vkSocialAddress:"/Haircut",
      FacebookSocialAddress:"/Haircut",
      InstagramSocialAddress:"/Haircut"
    };
  }

  render() {
    return (
      <div className="footerContainer">
        <Container>
          <Row className="pt-2">
            <Col className="text-center">
              <img
                height="25%"
                className="HeaderImageBackground"
                src={this.state.LogoImgURL}
                alt="Logo"
              />
              <div>Yuriy © 2020</div>
            </Col>
            <Col className="text-center">
              <div>{this.state.NameOfBusiness}</div>
              <div><a href={"tel:" + this.state.PhoneOfBusiness} className="text-info">📞 {this.state.PhoneOfBusiness}</a></div>
              <div><a href={"mailto:" + this.state.EmailOfBusiness} className="text-info">📧 {this.state.EmailOfBusiness}</a> </div>
            </Col>
            <Col className="text-center">
              <div><a href={"https://www.vk.com" + this.state.vkSocialAddress}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faVk } size="1x" /> {this.state.vkSocialAddress}</a></div>
              <div><a href={"https://www.instagram.com" + this.state.InstagramSocialAddress}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faInstagramSquare } size="lg" /> {this.state.InstagramSocialAddress}</a></div>
              <div><a href={"https://www.facebook.com" + this.state.FacebookSocialAddress}  target="_blank" className="text-secondary"><FontAwesomeIcon icon={ faFacebookSquare } size="lg" /> {this.state.FacebookSocialAddress}</a></div></Col>
          </Row>
        </Container>
      </div>
    );
  }
};