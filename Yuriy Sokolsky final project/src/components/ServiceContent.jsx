import React from "react";
import {addDays, addMonths, format, getHours, getTime, isToday, parse, setHours, setMinutes,} from "date-fns";
import $ from "jquery";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import LoginLogonForm from "./LoginLogonForm.jsx";
import {ServicePreviewRender} from "./ServicePreview.jsx";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import {WorkHours} from "../consts";
import {MastersList} from "./MastersList.jsx";
import {Loading} from "./Loading.jsx";

export class ServiceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: false,
            showModalWithLoginLogon: false,
            mastersList: [],
            selectedMasterID: "stub",
            datePickerValue:
                getHours(new Date()) > WorkHours.END_OF_RECORDING
                    ? addDays(new Date(), 1)
                    : new Date(),
            timePickerValue: getTime(new Date()),
            minTime: setHours(
                setMinutes(new Date(), WorkHours.START_MINUTES),
                WorkHours.START_HOURS
            ),
            maxTime: setHours(
                setMinutes(new Date(), WorkHours.STOP_MINUTES),
                WorkHours.STOP_HOURS
            ),
            excludeTimes: [],
            timeIntervals: 60,
            displayCalendar: false,
            disableButtons: false,
            successApp: false,
            minDate: new Date(),
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSelectMasterChange = this.onSelectMasterChange.bind(this);
        this.datePickerChange = this.datePickerChange.bind(this);
        this.searchAppointments = this.searchAppointments.bind(this);
        this.timePickerChange = this.timePickerChange.bind(this);
        this.sendNewAppointment = this.sendNewAppointment.bind(this);
        this.calculateIntervals = this.calculateIntervals.bind(this);
    }

    showModal() {
        this.setState({
            showModalWithLoginLogon: true,
        });
    }

    closeModal() {
        this.setState({
            showModalWithLoginLogon: false,
        });
    }

    onSelectMasterChange(event) {
        if (event) {
            let index = event.nativeEvent.target.selectedIndex;
            this.setState(
                {
                    selectedMasterID: event.target.value,
                    selectedMasterNameSurname: event.nativeEvent.target[index].text,
                    displayCalendar:false,
                    Loading: true,
                },
                this.searchAppointments
            );
        }
    }

    componentDidMount() {
        $.when(
            $.ajax({
                url: "/api/masters/",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                console.log(data);

                this.setState({mastersList: data});
            }.bind(this)
        );
    }

    datePickerChange(value) {
        this.setState(
            {
                datePickerValue: value,
            },
            this.searchAppointments
        );
    }

    timePickerChange(value) {
        this.setState({
            timePickerValue: value,
        });
    }

    searchAppointments() {
        $.when(
            $.ajax({
                url:
                    "/api/appointments/search-by-mater-date?selectedMasterID=" +
                    this.state.selectedMasterID +
                    "&date=" +
                    format(this.state.datePickerValue, "dd.MM.yyyy") +
                    "&serviceID=" +
                    this.props.serviceID,
                type: "GET",
                contentType: "text/plain",
                dataType: "json",
                processData: false,
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.calculateIntervals(data);
            }.bind(this)
        );
    }

    calculateIntervals(data) {
        if (getHours(new Date()) > WorkHours.END_OF_RECORDING) {
            this.setState({
                minDate: addDays(new Date(), 1),
            });
        }

        if (this.props.service.duration)
            this.setState({
                maxTime: setHours(
                    setMinutes(
                        new Date(),
                        60 - Number(this.props.service.duration.slice(-2))
                    ),
                    21
                )
            });
        if (
            isToday(this.state.datePickerValue) &&
            getHours(new Date()) < WorkHours.END_OF_RECORDING &&
            getHours(new Date()) > WorkHours.START_HOURS
        ) {
            this.setState({
                minTime: new Date(),
            });
        } else {
            this.setState({
                minTime: setHours(
                    setMinutes(new Date(), WorkHours.START_MINUTES),
                    WorkHours.START_HOURS
                ),
            });
        }
        let busyTime = [];
        data.map(function (e) {
            busyTime.push(parse(e, "HH:mm", new Date()));
        });
        this.setState(
            {
                excludeTimes: busyTime,
            },
            () => {
                this.setState({
                    displayCalendar: true,
                    Loading: false,
                });
            }
        );
    }

    sendNewAppointment() {
        this.setState({
            disableButtons: true,
        });
        $.when(
            $.ajax({
                url:
                    "/api/appointments?selectedMasterID=" +
                    this.state.selectedMasterID +
                    "&serviceID=" +
                    this.props.serviceID +
                    "&date=" +
                    format(this.state.datePickerValue, "dd.MM.yyyy") +
                    "&time=" +
                    format(this.state.timePickerValue, "HH:mm")+
                    "&masterNameSurname="+this.state.selectedMasterNameSurname+
                    "&serviceName="+this.props.service.name+
                    "&servicePrice="+this.props.service.price
                ,
                type: "PUT",
                contentType: "text/plain",
                dataType: "json",
                processData: false,
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.setState({
                    disableButtons: false,
                });
                if (data) {
                    this.setState({
                        successApp: true,
                    });
                    this.searchAppointments();
                }
                console.log(data);
            }.bind(this)
        );
    }

    render() {
        return (
            <>
                <div className="services-page-background">
                    <Container>
                        <Alert
                            show={this.state.successApp}
                            onClose={() =>
                                this.setState({
                                    successApp: false,
                                })
                            }
                            variant="success"
                            dismissible
                        >
                            <Alert.Heading>Успешная запись!</Alert.Heading>
                            <p>
                                Вы записались на процедуру "{this.props.service.name}"{" "}
                                {format(this.state.datePickerValue, "dd.MM.yyyy")} в{" "}
                                {format(this.state.timePickerValue, "HH:mm")} , мастер -{" "}
                                {this.state.selectedMasterNameSurname}
                            </p>
                        </Alert>
                        <Modal
                            show={this.state.showModalWithLoginLogon}
                            onHide={this.closeModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Вы не авторизированы.</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {" "}
                                <LoginLogonForm
                                    handleLoginLogout={this.props.handleLoginLogout}
                                    setData={this.props.setData}
                                />
                            </Modal.Body>
                            <Modal.Footer></Modal.Footer>
                        </Modal>

                        <Row>
                            <Col>
                                {this.props.service.name && (
                                    <ServicePreviewRender
                                        servicePreview={this.props.service}
                                        showButton={false}
                                    />
                                )}
                            </Col>
                            <Col>
                                <Row className="pt-3">
                                    {!this.props.isAuth && (
                                        <Button type="button" onClick={this.showModal}>
                                            Зарегистрируйтесь или войдите что бы записаться
                                        </Button>
                                    )}
                                </Row>
                                {this.props.isAuth && this.state.mastersList != [] && (
                                    <>
                                        <Row>
                                            <Col>
                                                Выбор мастера
                                                <MastersList
                                                    data={this.state.mastersList}
                                                    onChange={this.onSelectMasterChange}
                                                    value={
                                                        this.state.selectedMasterID || "Выберете мастера"
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        {this.state.Loading && (
                                            <Loading style={{height: "100%", background: "none"}}/>
                                        )}
                                        {this.state.displayCalendar && (
                                            <>
                                                <Row className="pt-2">
                                                    <Col>
                                                        <DatePicker
                                                            selected={this.state.datePickerValue}
                                                            onChange={this.datePickerChange}
                                                            minDate={this.state.minDate}
                                                            maxDate={addMonths(new Date(), 3)}
                                                            locale={ru}
                                                            inline
                                                        />
                                                    </Col>
                                                    <Col className="text-right">
                                                        <DatePicker
                                                            selected={this.state.timePickerValue}
                                                            onChange={this.timePickerChange}
                                                            excludeTimes={this.state.excludeTimes}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            dateFormat="HH:mm"
                                                            minTime={this.state.minTime}
                                                            maxTime={this.state.maxTime}
                                                            timeIntervals={this.state.timeIntervals}
                                                            locale={ru}
                                                            timeCaption="Время"
                                                            inline
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-right">
                                                        <Button
                                                            type="button"
                                                            onClick={this.sendNewAppointment}
                                                            disabled={this.state.disableButtons}
                                                        >
                                                            Записаться
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </>
                                        )}
                                    </>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

