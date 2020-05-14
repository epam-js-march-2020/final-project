import React from 'react';

import Header from './components/Header/Header';
import Home from './components/main/Home';
import Contacts from './components/main/Contacts'
import Footer from './components/Footer/Footer';
import NotFound from './components/main/NotFound'

import {Switch, Route} from 'react-router-dom';
const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/services' component={Services} />
        <Route path='/barbers' component={Barbers} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/' component={NotFound} />
      </Switch>
    </main>
  )
}

function Barbers() {
  return (
    <div className='container pt-xxxl'>Barbers</div>
  )
}

function Services() {
  return (
    <div className='container pt-xxxl'>Services</div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;