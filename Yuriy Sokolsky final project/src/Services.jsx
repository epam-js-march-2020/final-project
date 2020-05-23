import React from "react";
import {Container, Row, Col, Modal, Button ,Form} from "react-bootstrap";
import $ from "jquery";
import "./componentStyles/servicesContent.css";
import "./componentStyles/fancyBorder.css";
import { Link } from "react-router-dom";
import moment from "moment";
let momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
export default class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: [],
            hello: "2332",
            servicePreview: {},
        };
    }
    componentDidMount() {
        $.when(
            $.ajax({
                url: "/servicesList/",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.setState({ serviceList: data });
            }.bind(this)
        );
    }
    onServiceMouseOver(id) {
        let service = this.state.serviceList.find((x) => x.id === id);
        this.setState({ servicePreview: service });
    }

    render() {
        let serviceListRender = this.state.serviceList.map(
            function (service) {
                return (
                    <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        onMouseOver={() => this.onServiceMouseOver(service.id)}
                        className="text-light"
                    >
                        <Container>
                            <Row className="servicesPageItem fancyBorder">
                                <Col>{service.name}</Col>
                                <Col className="text-right" md="auto">
                                    {service.price} &#x20bd;
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                );
            }.bind(this)
        );

        return (
            <>
                <div className="servicesPageBackground">
                    <Container>
                        <Row>
                            <Col>
                                <div className="servicesPageContainerList">
                                    <div>{serviceListRender}</div>
                                </div>
                            </Col>
                            <Col>
                                <ServicePreviewRender
                                    servicePreview={this.state.servicePreview}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export class ServicePreviewRender extends React.Component {
    render() {
        if (this.props.servicePreview.name) {
            return (
                <div className="servicesPageContainerPreview fancyBorder">
                    <div className="text-center pt-3">
                        <h5>{this.props.servicePreview.name}</h5>
                    </div>
                    <div className="text-center pt-3">
                        <img
                            src={this.props.servicePreview.photoURL}
                            height="184px"
                            alt={this.props.servicePreview.name}
                        />
                    </div>
                    <Container>
                        <Row className="pt-3">
                            <Col >
                                <h6>Длительность сеанса:
                                    {moment
                                        .duration(this.props.servicePreview.duration)
                                        .format("h [час], m [минут]")}</h6>
                            </Col>
                            <Col xs lg="3" className="text-right">
                                <h6>Цена: {this.props.servicePreview.price} &#x20bd;</h6>
                            </Col>
                        </Row>
                        <Row className="pt-3 pb-3">
                            <Col className="text-right">
                                <Link to={`/services/${this.props.servicePreview.id}`}>
                                    <Button variant="outline-light"> Перейти к записи</Button>{" "}
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return <></>;
        }
    }
}

