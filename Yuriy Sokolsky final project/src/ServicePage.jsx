
import React from "react";
import Container from "react-bootstrap/Container";
import $ from "jquery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./componentStyles/servicesContent.css";
import moment from "moment";

export default class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service:{}
        };
    }
    componentDidMount() {
        fetch(`/servicesList/${this.props.match.params.id}`).then(response => response.json()).then(service => {
            console.log(service)
            if(service===true){
                window.location.replace("/");
            }
            else
                this.setState({ service });
        });
    }

    render() {
        return (
            <>
                <div>
                    <ServicesContent service={this.state.service}/>
                </div>
            </>
        );
    }
};


export class ServicesContent extends React.Component {
    render() {
        return (
            <>
                <div className="servicesPageBackground">
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <div className="text-center pt-3">
                                        {this.props.service.name}
                                    </div>
                                    <div className="text-center pt-3">
                                        <img
                                            src={this.props.service.photoURL}
                                            height="184px"
                                            alt={this.props.service.name}
                                        />
                                    </div>
                                    <Container>
                                        <Row className="pt-3">
                                            <Col>
                                                Длительность сеанса:
                                                {moment
                                                    .duration(this.props.service.duration)
                                                    .format("h [часа], m [минут]")}
                                            </Col>
                                            <Col className="text-right">
                                                Цена: {this.props.service.price} &#x20bd;
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <div>
                                    <form action="/newAppointment" method="POST" encType="multipart/form-data">
                                        <Container>

                                            <Row className="pt-3">
                                                <Col>
                                                    Выбор мастера
                                                    дата и время
                                                </Col>
                                                <Col className="text-right">
                                                    <Button   type="submit"  name="submit">
                                                        Записаться
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </form>

                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
