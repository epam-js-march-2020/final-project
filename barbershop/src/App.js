import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import Order from './pages/Order'
import './App.css';



class App extends React.Component {
 

  render() {
   
    return (
         <BrowserRouter>
      <div className='container'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/final-project" component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <Route path='/profile' component={Profile} />
            <Route path='/order' component={Order} />
          </Switch>
          <Footer/>
      </div>
        </BrowserRouter>
    )
  }
}

// const mapStateToProps = state => ({
//   currentUser: state.login
// })


// const mapDispatchToProps = dispatch => {
//   return {
//     logOut: () => dispatch(logoutRequest())
//   }
// }





export default App;
