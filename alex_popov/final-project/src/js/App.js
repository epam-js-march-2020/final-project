import React from 'react';

import {connect} from 'react-redux';
import { login } from './actions/actions';

import Header from './components/Header/Header';
import Main from './components/main/Main';
// import Footer from './components/Footer/Footer';


class App extends React.Component {

  componentDidMount() {
    
    document.querySelector('#root').addEventListener('click', this.onclick.bind(this));
    
    if (!this.props.user) {
      this.loginer()
    }
  }

  loginer() {
      const cookie = document.cookie;
      const code = cookie.split('=')[1];
      // console.log(code)
      
      const users = JSON.parse( localStorage.getItem('users') )

      const userId = users.findIndex( (el) => {
        return String( el.code ) ===  String( code )
      })
      
      if(userId !== -1) {
        this.props.login(users[userId])
      }
  }

  onclick(ev) {
    const action = ev.target.id;
    if ( action === 'activate') {
      this.props.activate()
    }

  }

  render() {
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
const propsMap = ({user}) => ({
  user
});

const actionsMap = (dispatch) => ({
  login: (user) => dispatch(login(user))
});


export default connect(propsMap, actionsMap)(App);;