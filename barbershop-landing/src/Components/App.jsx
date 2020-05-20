import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import Container from 'react-bootstrap/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';
import Appointment from './Appointment/Appointment';


import ScrollTotop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollTotop />
      <Container>
        <I18nextProvider i18n={i18n}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/services' component={Services}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/appointment' component={Appointment}/>
          </Switch>
          <Footer />
        </I18nextProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
