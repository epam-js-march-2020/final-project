import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { serviceList } from './service_list';
import { companyInfo } from './company_info';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';


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


import { 
  toHome, 
  toProfile, 
  toServices, 
  toService 
} from './actions/navigation_actions';

import { 
  toSignUp, 
  toLogIn, 
  toAddService, 
  toChangeName, 
  toChangeSecondName, 
  toChangeEmail, 
  outModals } from './actions/modal_actions';


import { reducerAuth } from './reducers/auth_reducer';
import { reducerNavigation } from './reducers/navigation_reducer';
import { reducerModals } from './reducers/modal_reducer';

import { defaultState } from './default_state';



const rootReducer = combineReducers({
  user: reducerAuth,
  navigation: reducerNavigation,
  modals: reducerModals,
});


const store = createStore(rootReducer);

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    modals: state.modals,
    user: state.user,
  }
}

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
    toSignUp: bindActionCreators(toSignUp, dispatch), 
    toLogIn: bindActionCreators(toLogIn, dispatch),
    toAddService: bindActionCreators(toAddService, dispatch),
    toChangeName: bindActionCreators(toChangeName, dispatch),
    toChangeSecondName: bindActionCreators(toChangeSecondName, dispatch),
    toChangeEmail: bindActionCreators(toChangeEmail, dispatch),
    outModals: bindActionCreators(outModals, dispatch), 
  }
}

const WrappedApp = connect(mapStateToProps, mapActionsToProps)(App);

localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
localStorage.setItem('services', JSON.stringify(serviceList));
localStorage.setItem('guests', JSON.stringify({})); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
