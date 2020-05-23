import React from "react";
import "./componentStyles/MainPageContent.css";
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NameOfBusiness:"Haircut by Yuriy",
            AddressOfBusiness: "г. Санкт-Петербург. ул. Пушкина д. 22"
        };

    }
    render() {
        return (
            <>
                <div className="mainPageBackground">
                    <div className="mainPageMainBlock">
                        <div className="mainPageMainBlockNameDiv"><span>{this.state.NameOfBusiness}</span></div>
                        <div className="mainPageMainBlockAddressDiv"><span>{this.state.AddressOfBusiness}</span></div>
                    </div>
                </div>
            </>
        );
    }
};