import {isAfter, isBefore, parse, set} from "date-fns";
import {Button, Container, Modal, Tab, Table, Tabs,} from "react-bootstrap";
import React from "react";
import $ from "jquery";
import {Loading} from "./Loading.jsx";

export default class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableButtons: false,
            appointments: [],
            Loading: true,
            showModal: false,
            date: new Date(),
            time: new Date(),
            showPasted: true,
            key: "future",
        };
        this.cancelAppointment = this.cancelAppointment.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }

    handleClose() {
        this.setState({showModal: false});
    }

    getAppointments() {
    $.when(
      $.ajax({
        url:
          "/api/appointments/search-by-user?userID=" + this.props.userData.id,
        type: "GET",
        contentType: "text/plain",
        dataType: "json",
        processData: false,
      })
    ).then(
        function (data) {
            console.log(data);
            this.setState({
                appointments: data,
                disableButtons: false,
                Loading: false,
            });
        }.bind(this)
    );
  }
  componentDidMount() {
    this.getAppointments();
  }
  openModalToDeleteAppointment(
    masterNameSurname,
    date,
    time,
    serviceName,
    _id
  ) {
    this.setState({
      masterNameSurname,
      date,
      time,
      serviceName,
      _id,
      showModal: true,
    });
  }
  cancelAppointment() {
    this.setState({
      disableButtons: true,
      Loading: true,
      showModal: false,
    });
    $.when(
      $.ajax({
          url: "/api/appointment/delete/" + this.state._id,
          type: "DELETE",
          contentType: "text/plain",
          dataType: "json",
          processData: false,
      })
    ).then(
        function () {
            this.getAppointments();
        }.bind(this)
    );
  }

    changeTab(k) {
        if (this.state.key != k)
            this.setState({
                key: k,
                showPasted: !this.state.showPasted,
            })
    }

    render() {
        let apointmentsRender = this.state.appointments.map((appointment, key) => {

            if (
                (this.state.showPasted &&
                    isAfter(
                        set(parse(appointment.date, "dd.MM.yyyy", new Date()), {
                            hours: appointment.time.substr(0, 2),
                            minutes: appointment.time.slice(-2),
                        }),
                        new Date()
                    ) && !appointment.isCanceled) ||
                (!this.state.showPasted &&
                    isBefore(
                        set(parse(appointment.date, "dd.MM.yyyy", new Date()), {
                            hours: appointment.time.substr(0, 2),
                            minutes: appointment.time.slice(-2),
                        }),
                        new Date()
                    )) ||
                (!this.state.showPasted && appointment.isCanceled)
            )
                return (
                    <tr key={"appointment" + key}>
                        <td>{appointment.serviceName} {appointment.isCanceled &&
                        <span className="text-warning">Отменена</span>} </td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.masterNameSurname}</td>
                        {this.state.showPasted && (
                            <td>
                                <Button
                                    variant="outline-light"
                                    disabled={this.state.disableButtons}
                                    onClick={() =>
                                        this.openModalToDeleteAppointment(
                                            appointment.masterNameSurname,
                                            appointment.date,
                                            appointment.time,
                                            appointment.serviceName,
                                            appointment._id
                                        )
                                    }
                                >
                                    Отмена записи
                                </Button>
                            </td>
                        )}
                    </tr>
                );
        });
        return (
            <div className="profile-page-background">
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Вы действительно хотите отменить запись?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Отменить запись на {this.state.serviceName} {this.state.date} в{" "}
                        {this.state.time} , мастер -{this.state.masterNameSurname}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Отмена
                        </Button>
                        <Button variant="primary" onClick={this.cancelAppointment}>
                            Удалить
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container>
                    <Tabs
                        className="tabs-color"
                        id="controlled-tab-example"
                        activeKey={this.state.key}
                        onSelect={(k) =>
                            this.changeTab(k)
                        }
                    >
                        <Tab eventKey="future" title="Предстоящие сеансы">
                            {this.state.Loading && (
                                <Loading style={{height: "100%", background: "none"}}/>
                            )}
                            {!this.state.Loading && (
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                    <tr>
                                        <th>Услуга</th>
                                        <th>Дата</th>
                                        <th>Время</th>
                                        <th>Мастер</th>
                                        <th>Отменить</th>
                                    </tr>
                                    </thead>
                                    <tbody>{apointmentsRender}</tbody>
                                </Table>
                            )}
                        </Tab>
                        <Tab eventKey="past" title="Прошедшие и отмененные сеансы">
                            {this.state.Loading && (
                                <Loading style={{height: "100%", background: "none"}}/>
                            )}
                            {!this.state.Loading && (
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                    <tr>
                                        <th>Услуга</th>
                                        <th>Дата</th>
                                        <th>Время</th>
                                        <th>Мастер</th>
                                    </tr>
                                    </thead>
                                    <tbody>{apointmentsRender}</tbody>
                                </Table>
                            )}
                        </Tab>
                    </Tabs>
                </Container>
            </div>
    );
  }
}
