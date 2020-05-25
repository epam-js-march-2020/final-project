import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Cookies from "universal-cookie";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Services from "./Services.jsx";
import Service from "./Service.jsx";
import AboutUs from "./AboutUs.jsx";
import Admin from "./Admin.jsx";
import Profile from "./Profile.jsx";
import NoMatch from "./NoMatch.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import $ from "jquery";

const cookies = new Cookies();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: JSON.parse(cookies.get("auth")) || false,
            userData: cookies.get("userData") || {},
        };
        this.handleLoginLogout = this.handleLoginLogout.bind(this);
        this.setData = this.setData.bind(this);
    }

    handleLoginLogout() {
        if (this.state.auth) {
            this.setState(
                {
                    auth: false,
                    userData: {},
                },
                () => {
                    cookies.set("auth", this.state.auth, {path: "/"});
                    cookies.set("userData", {}, {path: "/"});
                    $.ajax({
                        url: "/api/logout/",
                        type: "POST",
                        contentType: "application/json",
                        dataType: "json",
                    });
                }
            );
        } else {
            this.setState({
                auth: true,
            });
            cookies.set("auth", this.state.auth, {path: "/"});
        }
    }

    setData(data) {
        this.setState(
            {
                userData: data,
            },
            () => {
                cookies.set("userData", this.state.userData, {
                    path: "/",
                });
            }
        );
    }

    render() {
        return (
            <Router>
                <Header
                    isAuth={this.state.auth}
                    handleLoginLogout={this.handleLoginLogout}
                />
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route
                        path="/services/:id"
                        render={(props) => (
                            <Service
                                {...props}
                                isAuth={this.state.auth}
                                userData={this.state.userData}
                                handleLoginLogout={this.handleLoginLogout}
                                setData={this.setData}
                            />
                        )}
                    />
                    <Route path="/services">
                        <Services/>
                    </Route>
                    <Route path="/about">
                        <AboutUs/>
                    </Route>
                    <Route path="/profile">
                        <Profile
                            isAuth={this.state.auth}
                            handleLoginLogout={this.handleLoginLogout}
                            setData={this.setData}
                            userData={this.state.userData}
                        />
                    </Route>
                    <Route path="/admin">
                        <Admin/>
                    </Route>

                    <Route path="*" component={NoMatch}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,

    document.getElementById("main")
);
