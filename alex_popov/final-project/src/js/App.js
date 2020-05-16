import React from 'react';

import Header from './components/Header/Header';
import Home from './components/main/Home';
import Services from './components/main/Services';
import Contacts from './components/main/Contacts'
// import Footer from './components/Footer/Footer';
import NotFound from './components/main/NotFound';

import pic from '../img/stuff/3.jpg';

import { Switch, Route } from 'react-router-dom';


import {connect} from 'react-redux';
import { activate } from './actions/actions';




const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/services' component={Services} />
        <Route path='/services/:name' component={Services} />
        <Route exact path='/craft' component={Craft} />
        <Route exact path='/contacts' component={Contacts} />
        <Route path='/user' component={User} />
        <Route path='/404' component={NotFound} />
        <Route path='/' component={NotFound} />
      </Switch>
    </main>
  )
}


class User extends React.Component {
  render() {

    return (
      <div className="container pt-xxxl">
        user
      </div>
    )
  }
}


class Craft extends React.Component{

  render() {
    return (
      <div className='container_craft'>
        <img alt='stuff' className='stuff_image' src={pic} />
      </div>
    )
  }
}




class App extends React.Component {
  componentDidMount() {
    console.log('did')
    document.querySelector('#root').addEventListener('click', this.onclick.bind(this))
  }
  componentWillUnmount() {
    console.log('will')
  }

  onclick(ev) {
    // console.log(ev.target.id)
    const action = ev.target.id;
    if ( action === 'activate') {
      this.props.activate()
    }

  }

  render() {
    console.log(this.props)
    return (
      <>
        <Header />
        <Main />
        {/* <Footer /> */}
      </>
    );
  }
}

// Какие свойства будут связаны между store и компонентом
// state destruction
const props = ({user}) => ({
  user
});

// Какие actions будут доступны компоненту
const actions = (dispatch) => ({
  activate: () => dispatch(activate())
});


export default connect(props, actions)(App);;