import React from "react";
import "./componentStyles/MainPageContent.css";
import {NameOfBusiness,AddressOfBusiness} from "./consts.js"

export default class MainPage extends React.Component {

    render() {
        return (
            <>
                <div className="main-page-background">
                    <div className="main-page-main-block">
                        <div className="main-page-main-block-name-div"><span>{NameOfBusiness}</span></div>
                        <div className="main-page-main-block-address-div">
                            <span>{AddressOfBusiness}</span></div>
                    </div>
                </div>
            </>
        );
    }
};