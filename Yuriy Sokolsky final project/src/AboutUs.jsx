import React from "react";
import $ from "jquery";

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mastersList: []
        };
    }

    componentDidMount() {
        $.when(
            $.ajax({
                url: "/api/masters",
                type: "GET",
                contentType: "application/json",
                dataType: "json",
            })
        ).then(
            function (data, textStatus, jqXHR) {
                this.setState({mastersList: data});
            }.bind(this)
        );
    }

    render() {
        return (
            <>
                <div>

                </div>
            </>
        );
    }
};