import React from 'react';

import Header from './components/Header/Header';
import Home from './components/main/Home';
import Services from './components/main/Services';
import Contacts from './components/main/Contacts'
import Footer from './components/Footer/Footer';
import NotFound from './components/main/NotFound'

import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/services' component={Services} />
        <Route path='/services/:name' component={Services} />
        <Route exact path='/craft' component={Barbers} />
        <Route exact path='/contacts' component={Contacts} />
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