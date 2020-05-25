import React from "react";

import {Alert, Button, Container, Form, Table} from "react-bootstrap";

import $ from "jquery";

//::TODO  удаление и редактирование
export default class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginValue: "",
            passwordValue: "",
            selectedCollection: "",
            logon: false,
            showLoginFailAlert: false,
            collection: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
        this.onSelectCollectionChange = this.onSelectCollectionChange.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    login(event) {
        event.preventDefault();
        $.when(
            $.ajax({
                url: "/adminLogin/",
                type: "POST",
                data: JSON.stringify({
                    login: this.state.loginValue,
                    password: this.state.passwordValue,
                }),
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                if (data === false) {
                    this.setState({
                        showLoginFailAlert: true,
                    });
                } else {
                    this.setState({
                        showLoginFailAlert: false,
                        logon: true,
                        dbList: data,
                    });
                }
            }.bind(this)
        );
    }

    onSelectCollectionChange(event) {
        console.log(event)
        if (event) {
            this.setState({
                    selectedCollection: event.target.value,
                },
                () => {
                    fetch(`/collection/${this.state.selectedCollection}`)
                        .then((response) => response.json())
                        .then((collection) => {
                            this.setState({collection});
                        });
                });
        } else {

        }
    }

    render() {
        return (
            <>
                <div>
                    <Container className="pt-5">
                        <Alert show={this.state.showLoginFailAlert} variant="danger">
                            <Alert.Heading>Wrong login or password</Alert.Heading>
                            <p>Looks like you are not admin</p>
                        </Alert>
                        {!this.state.logon && (
                            <div>
                                <Form onSubmit={this.login}>
                                    <Form.Group controlId="formBasicLign">
                                        <Form.Label>login</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter login"
                                            name="loginValue"
                                            value={this.state.loginValue}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="passwordValue"
                                            value={this.state.passwordValue}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        )}
                        {this.state.logon && this.state.dbList != [] && (
                            <div>
                                Choose Collection :{" "}
                                <Answer
                                    data={this.state.dbList}
                                    onChange={this.onSelectCollectionChange}
                                    value={this.state.selectedCollection}
                                />
                            </div>
                        )}
                        {this.state.collection != 0 && (
                            <RenderTable
                                table={this.state.collection}
                                tableName={this.state.selectedCollection}
                                updateTable={this.onSelectCollectionChange}
                                loginPass={{
                                    login: this.state.loginValue,
                                    password: this.state.passwordValue,
                                }}
                            />
                        )}
                    </Container>
                </div>
            </>
        );
    }
}
let Answer = (props) => (
    <select onChange={props.onChange} value={props.value}>
        {props.data.map((x, y) => (
            <option key={y} value={x}>
                {x}
            </option>
        ))}
    </select>
);
const initialState = {
    newElement: {},
};

export class RenderTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addElementToTable = this.addElementToTable.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => ({
            newElement: {
                // object that we want to update
                ...prevState.newElement, // keep all other key-value pairs
                [name]: value, // update the value of specific key
            },
        }));
    }

    addElementToTable() {
        $.when(
            $.ajax({
                url: "/collectionAddNewItem/",
                type: "POST",
                data: JSON.stringify({
                    collectionName: this.props.tableName,
                    newElement: this.state.newElement,
                    loginPass: this.props.loginPass
                }),
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                if (data === true) {
                    this.props.updateTable();
                    this.setState(initialState);
                }
            }.bind(this)
        );
    }

    render() {
        let headerRender = Object.keys(this.props.table[0]).map(
            function (item, a) {
                return <th key={item.toString()}>{item} </th>;
            }.bind(this)
        );

        let tableRender = this.props.table.map(
            function (item, a) {
                return (
                    <tr key={a}>
                        {Object.values(item).map(function (td, a) {
                            return <td key={item._id + a.toString()}>{td}</td>;
                        })}
                    </tr>
                );
            }.bind(this)
        );
        let renderFieldToAdd = Object.keys(this.props.table[0]).map(
            function (td, a) {
                if (td !== "_id") {
                    return (
                        <td key={td + a.toString()}>
                            <input
                                className="w-75"
                                type="text"
                                name={td}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    );
                } else {
                    return <td key={td + a.toString()}>Will be auto filled</td>;
                }
            }.bind(this)
        );
        return (
            <>
                <Table responsive>
                    <thead>
                    <tr>{headerRender}</tr>
                    </thead>
                    <tbody>
                    {tableRender}
                    <tr>{renderFieldToAdd}</tr>
                    </tbody>
                </Table>
                <Button variant="primary" onClick={this.addElementToTable}>
                    Add element to table
                </Button>
            </>
        );
    }
}


