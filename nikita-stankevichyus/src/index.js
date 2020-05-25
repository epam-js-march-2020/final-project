import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { serviceList } from './service_list';
import { companyInfo } from './company_info';

import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"



import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';

// Importing authentication actions
import { 
  logIn, 
  logOut, 
  signUp, 
  addService, 
  addGuestService, 
  deleteService, 
  changeName, 
  changeSecondName, 
  changeEmail 
} from './actions/auth_actions';

// Importing navigation actions
import { 
  toHome, 
  toProfile, 
  toServices, 
  toService,
  hideBar,
  showBar,
} from './actions/navigation_actions';

// Importing modal actions
import { 
  toSignUp, 
  toLogIn, 
  toAddService, 
  toChangeName, 
  toChangeSecondName, 
  toChangeEmail, 
  outModals } from './actions/modal_actions';

// Importing reducers
import { reducerAuth } from './reducers/auth_reducer';
import { reducerNavigation } from './reducers/navigation_reducer';
import { reducerModals } from './reducers/modal_reducer';

// Combining reducers accordingly to their "domains"
const rootReducer = combineReducers({
  user: reducerAuth,
  navigation: reducerNavigation,
  modals: reducerModals,
});


const store = createStore(rootReducer);

// Mapping state to props as it is
const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    modals: state.modals,
    user: state.user,
  }
}

// Mapping actions to props as they are
const mapActionsToProps = (dispatch) => {
  return {
    addService: bindActionCreators(addService, dispatch),
    addGuestService: bindActionCreators(addGuestService, dispatch),
    changeName: bindActionCreators(changeName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
    changeEmail: bindActionCreators(changeEmail, dispatch),
    deleteService: bindActionCreators(deleteService, dispatch),
    logIn: bindActionCreators(logIn, dispatch),
    logOut: bindActionCreators(logOut, dispatch),
    signUp: bindActionCreators(signUp, dispatch),
    toHome: bindActionCreators(toHome, dispatch),
    toProfile: bindActionCreators(toProfile, dispatch),
    toServices: bindActionCreators(toServices, dispatch),
    toService: bindActionCreators(toService, dispatch),
    hideBar: bindActionCreators(hideBar, dispatch),
    showBar: bindActionCreators(showBar, dispatch),
    toSignUp: bindActionCreators(toSignUp, dispatch), 
    toLogIn: bindActionCreators(toLogIn, dispatch),
    toAddService: bindActionCreators(toAddService, dispatch),
    toChangeName: bindActionCreators(toChangeName, dispatch),
    toChangeSecondName: bindActionCreators(toChangeSecondName, dispatch),
    toChangeEmail: bindActionCreators(toChangeEmail, dispatch),
    outModals: bindActionCreators(outModals, dispatch), 
  }
}

// Connecting redux and react via wrapping
const WrappedApp = connect(mapStateToProps, mapActionsToProps)(App);

// Fetching to DB company info (contacts, decsription)
localStorage.setItem('companyInfo', JSON.stringify(companyInfo));

// Fetching to DB services list 
localStorage.setItem('services', JSON.stringify(serviceList));

// Initializing guests object in local storage
localStorage.setItem('guests', JSON.stringify({})); 

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <WrappedApp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
