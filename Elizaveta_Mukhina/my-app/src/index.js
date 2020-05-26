import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

let headerLink = [
		{name:"Home", id:""},
		{name:"My account", id:"account"},
		{name:"Log in", id:"login"},
		]

		let servicesLink = [
		{dropName:"Hair", id:"hairPage"},
		{dropName:"Shaves", id:"shavesPage"},
		{dropName:"Treatment", id:"treatmentPage"}
		]
		

ReactDOM.render(
  <BrowserRouter>
    <App headerLink={headerLink} servicesLink={servicesLink} />

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
