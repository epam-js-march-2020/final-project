import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import $ from "jquery";
import "./componentStyles/ProfileContent.css";
import LoginLogonForm from "./components/LoginLogonForm.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {isBefore, parseISO} from "date-fns";
import {ProfileLoggedIn} from "./components/ProfileLoggedIn.jsx"

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="profile-page-background">
                    <Container>
                        {!this.props.isAuth && (
                            <LoginLogonForm
                                handleLoginLogout={this.props.handleLoginLogout}
                                setData={this.props.setData}
                            />
                        )}
                        {this.props.isAuth && (
                            <ProfileLoggedIn
                                userData={this.props.userData}
                                setData={this.props.setData}
                            />
                        )}
                    </Container>
                </div>
            </>
        );
    }
}

