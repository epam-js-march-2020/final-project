import React from "react";
import {Container} from "react-bootstrap";
import "./componentStyles/ProfileContent.css";
import "react-phone-input-2/lib/style.css";
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
                            <ProfileLoggedIn
                                userData={this.props.userData}
                                setData={this.props.setData}
                            />
                    </Container>
                </div>
            </>
        );
    }
}

