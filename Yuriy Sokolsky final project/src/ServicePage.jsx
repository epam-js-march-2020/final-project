import React from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import $ from "jquery";
import "./componentStyles/servicesContent.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import {
  addMonths,
    addDays,
  setHours,
  setMinutes,
  format,
  parse,
  getTime,
  isToday,
    getHours
} from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "react-bootstrap/Alert";
import LoginLogonForm from "./components/LoginLogonForm.jsx";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {},
    };
  }

  componentDidMount() {
    fetch(`/services-list/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((service) => {
        if (service === true) {
          window.location.replace("/");
        } else this.setState({ service });
      });
  }

  render() {
    return (
      <>
        <div>
          <ServicesContent
            service={this.state.service}
            isAuth={this.props.isAuth}
            userData={this.props.userData}
            handleLoginLogout={this.props.handleLoginLogout}
            setData={this.props.setData}
            serviceID={this.props.match.params.id}
          />
        </div>
      </>
    );
  }
}

export class ServicesContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWithLoginLogon: false,
      mastersList: [],
      selectedMasterID: "stub",
      datePickerValue: (getHours(new Date())>21) ? addDays(new Date(),1) : (new Date()),
      timePickerValue: getTime(new Date()),
      minTime: setHours(setMinutes(new Date(), 0), 10),
      maxTime: setHours(setMinutes(new Date(), 0), 22),
      excludeTimes: [],
      timeIntervals: 30,
      displayCalendar: false,
      disableButtons: false,
      successApp: false,
        minDate:new Date(),
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSelectMasterChange = this.onSelectMasterChange.bind(this);
    this.datePickerChange = this.datePickerChange.bind(this);
    this.searchAppointments = this.searchAppointments.bind(this);
    this.timePickerChange = this.timePickerChange.bind(this);
    this.sendNewAppointment = this.sendNewAppointment.bind(this);
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
        },
        this.searchAppointments
      );
    }
  }
  componentDidMount() {
    $.when(
      $.ajax({
        url: "/masters-list/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
      })
    ).then(
      function (data, textStatus, jqXHR) {
        console.log(data);

        this.setState({ mastersList: data });
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
          "/appointments-by-master-and-date?selectedMasterID=" +
          this.state.selectedMasterID +
          "&selectedMasterID=" +
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
        if(getHours(new Date())>21){
            this.setState({
                minDate: addDays(new Date(),1),

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
            ),
            timeIntervals: Number(this.props.service.duration.slice(-2)),
          });
        if (isToday(this.state.datePickerValue) && getHours(new Date())<21) {
          this.setState({
            minTime: new Date(),
          });
        } else {
          this.setState({
            minTime: setHours(setMinutes(new Date(), 0), 10),
          });
        }
        let busyTime = [];
        console.log(data);
        data.map(function (e) {
          e.map(function (a) {
            busyTime.push(parse(a.timeStart, "HH:mm", new Date()));
          });
        });
        this.setState({
          excludeTimes: busyTime,
          displayCalendar: true,
        });
      }.bind(this)
    );
  }
  sendNewAppointment() {
    this.setState({
      disableButtons: true,
    });
    $.when(
      $.ajax({
        url:
          "/send-new-appointment?selectedMasterID=" +
          this.state.selectedMasterID +
          "&serviceID=" +
          this.props.serviceID +
          "&date=" +
          format(this.state.datePickerValue, "dd.MM.yyyy") +
          "&time=" +
          format(this.state.timePickerValue, "HH:mm"),
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
        }
        console.log(data);
      }.bind(this)
    );
  }

  render() {
    return (
      <>
        <div className="servicesPageBackground">
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
                Вы записались на {this.props.service.name}{" "}
                {format(this.state.datePickerValue, "dd.MM.yyyy")} на{" "}
                {format(this.state.timePickerValue, "HH:mm")} к{" "}
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

let MastersList = (props) => (
  <Form.Control as="select" onChange={props.onChange} value={props.value}>
    <option value="stub" disabled hidden>
      Выберите мастера
    </option>
    {props.data.map((x, y) => (
      <option key={y} value={x.id}>
        {x.name + " " + x.surname}
      </option>
    ))}
  </Form.Control>
);
