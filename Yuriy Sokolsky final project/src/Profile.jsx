import React from "react";
import Container from "react-bootstrap/Container";
import $ from "jquery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./componentStyles/ProfileContent.css";
import LoginLogonForm from "./components/LoginLogonForm.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="ProfilePageBackground">
                    <Container>
                        {!this.props.isAuth && (
                            <LoginLogonForm
                                handleLoginLogout={this.props.handleLoginLogout }setData={this.props.setData}
                            />
                        )}
                        {this.props.isAuth && (
                            <ProfileLoggedIn  userData={this.props.userData}/>
                        )}
                    </Container>
                </div>
            </>
        );
    }
}

export class ProfileLoggedIn extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>

            </>
        );
    }
}
