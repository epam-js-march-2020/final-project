import React from "react";
import $ from "jquery";
import "./componentStyles/servicesContent.css";
import "react-datepicker/dist/react-datepicker.css";
import {Redirect} from "react-router-dom";
import {ServiceContent} from "./components/ServiceContent.jsx";

export default class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: {},
            toServices: false,
        };
    }

    componentDidMount() {
        $.when(
            $.ajax({
                url: `/api/services/+${this.props.match.params.id}`,
                type: "GET",
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                console.log(data);
                if (data) this.setState({service: data});
                else this.setState({toServices: true});
            }.bind(this)
        );
    }

    render() {
        if (this.state.toServices) {
            return <Redirect to="/services"/>;
        }
        return (
            <>
                <div>
                    <ServiceContent
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


