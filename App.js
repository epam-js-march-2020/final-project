import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import HomePage from './pages/home/home.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Services from './components/services/services.component';
import Customer from './components/customer/customer.component';
import './App.css';

function App() {
  return (
    <div id="root">
       <Header/>

       <Switch>
         <Route exact path="/" component={HomePage}/>
       </Switch>

       <Switch>
         <Route exact path="/services" component={Services}/>
       </Switch>
       
       <Switch>
         <Route exact path="/customer" component={Customer}/>
       </Switch>

       <Footer/>

    </div>
   
  );
}

export default App;
