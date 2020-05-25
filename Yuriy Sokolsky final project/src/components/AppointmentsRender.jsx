import {isBefore, parseISO} from "date-fns";
import {Button, Row} from "react-bootstrap";
import React from "react";

export let AppointmentsRender = (props) =>
    props.appointments.map((appointment) => {
        let Services = appointment.user.services.map((service) => {
            let Dates = service.date.map((date) => {
                if (
                    isBefore(
                        new Date(),
                        parseISO(
                            new Date(
                                date.date.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")
                            ).toISOString()
                        )
                    )
                ) {
                    let Time = date.times.map((time) => {
                        if (time.timeStart != "canceled")
                            return (
                                <Row key={date.date + time.timeStart}>
                                    {appointment.masterName} {appointment.masterSurName}{" "}
                                    {service.name} :{date.date} {time.timeStart}
                                    <Button
                                        disabled={props.disableButtons}
                                        onClick={() =>
                                            props.cancelAppointment(
                                                appointment.masterID,
                                                appointment.user.userID,
                                                service.serviceID,
                                                date.date,
                                                time.timeStart
                                            )
                                        }
                                    >
                                        Отмена записи
                                    </Button>
                                </Row>
                            );
                    });
                    return <>{Time}</>;
                }
            });
            return <>{Dates}</>;
        });
        return <>{Services}</>;
    });