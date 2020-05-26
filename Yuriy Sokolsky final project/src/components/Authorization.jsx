import React from "react";
import {Container} from "react-bootstrap";
import "../componentStyles/ProfileContent.css";
import LoginLogonForm from "./LoginLogonForm.jsx";


export default class Authorization extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="profile-page-background">
                    <Container>
                        <LoginLogonForm
                            handleLoginLogout={this.props.handleLoginLogout}
                            setData={this.props.setData}
                        />
                    </Container>
                </div>
            </>
        );
    }
}

