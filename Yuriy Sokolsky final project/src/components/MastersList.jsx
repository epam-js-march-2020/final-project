import {Form} from "react-bootstrap";
import React from "react";

export let MastersList = (props) => (
    <Form.Control as="select" onChange={props.onChange} value={props.value}>
        <option value="stub" disabled hidden>
            Выберите мастера
        </option>
        {props.data.map((master , index) => (
            <option key={index} value={master .id}>
                {master .name + " " + master .surname}
            </option>
        ))}
    </Form.Control>
);