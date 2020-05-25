import React from "react";
import {Container} from "react-bootstrap";


export default class NoMatch extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="ProfilePageBackground">
                    <Container>
                        <h1>No match here</h1>
                    </Container>
                </div>
            </>
        );
    }
}
