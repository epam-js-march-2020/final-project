import { format, isBefore, parseISO } from "date-fns";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import React from "react";
import $ from "jquery";
import { Loading } from "./Loading.jsx";

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
    };
    this.cancelAppointment = this.cancelAppointment.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
  }
  handleClose() {
    this.setState({ showModal: false });
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
      function (data, textStatus, jqXHR) {
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
  render() {
    let apointmentsRender = this.state.appointments.map((appointment, key) => {
      return (
        <Row key={"appointment" + key}>
          {appointment.masterNameSurname} {appointment.serviceName} :
          {appointment.date} {appointment.time}
          <Button
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
        </Row>
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
          <Row>
            <Col className="text-center">
                {this.state.appointments.length!==0 && <h5>Предстоящие сеансы:</h5>}
                {this.state.appointments.length===0 && <h5>У вас нет предстоящих сеансов</h5>}
            </Col>
          </Row>
          {this.state.Loading && (
            <Loading style={{ height: "100%", background: "none" }} />
          )}
          {!this.state.Loading && <>{apointmentsRender}</>}

        </Container>
      </div>
    );
  }
}
