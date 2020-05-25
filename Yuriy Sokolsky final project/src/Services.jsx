import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import $ from "jquery";
import "./componentStyles/servicesContent.css";
import "./componentStyles/fancyBorder.css";
import {Link} from "react-router-dom";
import {ServicePreviewRender} from "./components/ServicePreview.jsx";

export default class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: [],
            servicePreview: {},
        };
    }

    componentDidMount() {
        $.when(
            $.ajax({
                url: "/api/services/",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.setState({serviceList: data});
            }.bind(this)
        );
    }

    onServiceMouseOver(id) {
        let service = this.state.serviceList.find((x) => x.id === id);
        this.setState({servicePreview: service});
    }

    render() {
        let serviceListRender = this.state.serviceList.map((service) => {
            return (
                <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    onMouseOver={() => this.onServiceMouseOver(service.id)}
                    className="text-light"
                >
                    <Container>
                        <Row className="services-page-item fancy-border">
                            <Col>{service.name}</Col>
                            <Col className="text-right" md="auto">
                                {service.price} &#x20bd;
                            </Col>
                        </Row>
                    </Container>
                </Link>
            );
        });

        return (
            <>
                <div className="services-page-background">
                    <Container>
                        <Row>
                            <Col>
                                <div className="services-page-container-list">
                                    <div>{serviceListRender}</div>
                                </div>
                            </Col>
                            <Col>
                                {this.state.servicePreview.name && <ServicePreviewRender
                                    servicePreview={this.state.servicePreview} showButton={true}
                                />}

                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

