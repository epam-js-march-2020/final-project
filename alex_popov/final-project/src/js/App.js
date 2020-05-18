import React from 'react';

import {connect} from 'react-redux';
import { activate, login } from './actions/actions';

import Header from './components/Header/Header';
import Main from './components/main/Main';
// import Footer from './components/Footer/Footer';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }
  componentDidMount() {
    // console.log('app did')
    document.querySelector('#root').addEventListener('click', this.onclick.bind(this))
    
    if (!this.props.user) {
      const cookie = document.cookie;
      const code = cookie.split('=')[1]
      console.log(code)
      
      const users = JSON.parse( localStorage.getItem('users') )
      const userId = users.findIndex( (el) => {
        return el.code == code
      })
      console.log(userId)
      if(userId !== -1) {
        this.props.login(users[userId])
      }
      console.log(this.props.user)
    }
  }

  // componentWillUnmount() {
  //   console.log('app will')
  // }

  onclick(ev) {
    // console.log(ev.target.id)
    const action = ev.target.id;
    if ( action === 'activate') {
      this.props.activate()
    }

  }

  render() {
    // console.log(this.props)
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

// Какие actions будут доступны компоненту
const actionsMap = (dispatch) => ({
  activate: () => dispatch(activate()),
  login: (user) => dispatch(login(user))
});


export default connect(propsMap, actionsMap)(App);;