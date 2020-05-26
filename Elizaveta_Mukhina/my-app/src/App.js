import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"; 
import Hair from "./Pages/Hair"; 
import Shaves from "./Pages/Shaves"; 
import Treatment from "./Pages/Treatment"; 
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import LogIn from "./Pages/LogIn"; 
import CheckForService from "./Pages/Form";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthProvider";
import { PrivateRoute } from "./PrivateRoute";




function App(props) {
	let headerLink = props.headerLink;
	let servicesLink = props.servicesLink;
	
 return (
 	<AuthProvider>
  <BrowserRouter>
<Header  headerLink={headerLink} servicesLink={servicesLink}/>
 <Route exact path="/" component={Home} />
<Route path="/hairPage" component={Hair} />
<Route path="/shavesPage" component={Shaves} />
<Route path="/treatmentPage" component={Treatment} />
<Route path="/login" component={LogIn} />
<Route path="/form" component={CheckForService} />
<PrivateRoute path="/account" component={Account} />

  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
