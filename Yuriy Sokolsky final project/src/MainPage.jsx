import React from "react";
import "./componentStyles/MainPageContent.css";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className="main-page-background">
                    <div className="main-page-main-block">
                        <div className="main-page-main-block-name-div"><span>Haircut by Yuriy</span></div>
                        <div className="main-page-main-block-address-div">
                            <span>г. Санкт-Петербург. ул. Пушкина д. 22</span></div>
                    </div>
                </div>
            </>
        );
    }
};