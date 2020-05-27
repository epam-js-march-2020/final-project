import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import ServicesList from './components/ServicesList';
import Service from './components/Service';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  // localStorage.setItem('login', '');
  // localStorage.setItem('password', '');
  // localStorage.setItem('isAuth', false);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} /> >
          <Route exact path="/services" component={ServicesList} />
          <Route path="/services/:id" component={Service} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
