import {Col, Container, Row} from "react-bootstrap";
import {format, parse} from "date-fns";
import {Link} from "react-router-dom";
import React from "react";

export let ServicePreviewRender;
ServicePreviewRender = (props) => (
    <>
        <div className="text-center pb-3"><h5>{props.servicePreview.name}</h5></div>
        <div className="services-page-container-preview fancy-border">
            <div className="text-center pt-3">
                <img
                    src={props.servicePreview.photoURL}
                    height="184px"
                    alt={props.servicePreview.name}
                />
            </div>
            <Container>
                <Row className="pt-3 pb-2 ">
                    <Col className="pb-1">
                        <h6>
                            Длительность сеанса:
                            {format(
                                parse(props.servicePreview.duration || "00:00", "HH:mm", new Date()),
                                " mm 'минут'"
                            )}
                        </h6>
                    </Col>
                    <Col xs lg="3" className="text-right">
                        <h6>Цена: {props.servicePreview.price} &#x20bd;</h6>
                    </Col>
                </Row>


            </Container>
        </div>
        {props.showButton && <Row className="pt-3 pb-3">
            <Col className="text-right">
                <Link to={`/services/${props.servicePreview.id}`} className="btn btn-outline-light">
                    Перейти к записи
                </Link>
            </Col>
        </Row>}</>
);