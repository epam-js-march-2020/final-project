import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Services from "./Services.jsx";
import Service from "./ServicePage.jsx";
import AboutUs from "./AboutUs.jsx";
import Admin from "./Admin.jsx";
import Profile from "./Profile.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import $ from "jquery";
function NoMatch() {
  return <h1>No match here</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: JSON.parse(localStorage.getItem("auth")) || false,
      userData: JSON.parse(localStorage.getItem("userData")) || {},
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
              localStorage.setItem("auth", JSON.stringify(this.state.auth));
              localStorage.setItem("userData", JSON.stringify({}));
              $.ajax({
                url: "/logout/",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
              })
            }
          );
    } else {
      this.setState({
        auth: true,
      });
      localStorage.setItem("auth", JSON.stringify(this.state.auth));
    }
  }
  setData(data) {
    this.setState(
      {
        userData: data,
      },
      () => {
        localStorage.setItem("userData", JSON.stringify(this.state.userData));
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
            <MainPage />
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
            <Services />
          </Route>
          <Route path="/about">
            <AboutUs />
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
            <Admin />
          </Route>

          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
ReactDOM.render(
  <App />,

  document.getElementById("main")
);
