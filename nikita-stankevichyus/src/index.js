import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';

// import { defaultState } from './default_state';


import { addService } from './actions/add_service';
import { changeData } from './actions/change_data';
import { deleteService } from './actions/delete_service';
import { logIn } from './actions/login';
import { signUp } from './actions/sign_up';
import { toHome } from './actions/to_home';
import { toProfile } from './actions/to_profile';
import { toServices } from './actions/to_services';
import { toSignUp, toLogIn, outModals } from './actions/to_modals';

import { reducerService } from './reducers/service_reducer';
import { reducerAuth } from './reducers/auth_reducer';
import { reducerNavigation } from './reducers/navigation_reducer';
import { reducerModals } from './reducers/modal_reducer';

import { defaultState } from './default_state';



const rootReducer = combineReducers({
  loged: reducerAuth,
  navigation: reducerNavigation,
  services: reducerService,
  modals: reducerModals,
});


const store = createStore(rootReducer);

const mapStateToProps = (state) => {
  return {
    loged: state.loged,
    navigation: state.navigation,
    services: state.services,
    modals: state.modals,
    userId: state.userId,
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    addService: bindActionCreators(addService, dispatch),
    changeData: bindActionCreators(changeData, dispatch),
    deleteService: bindActionCreators(deleteService, dispatch),
    logIn: bindActionCreators(logIn, dispatch),
    signUp: bindActionCreators(signUp, dispatch),
    toHome: bindActionCreators(toHome, dispatch),
    toProfile: bindActionCreators(toProfile, dispatch),
    toServices: bindActionCreators(toServices, dispatch),
    toSignUp: bindActionCreators(toSignUp, dispatch), 
    toLogIn: bindActionCreators(toLogIn, dispatch), 
    outModals: bindActionCreators(outModals, dispatch), 
  }
}

const WrappedApp = connect(mapStateToProps, mapActionsToProps)(App);
localStorage.clear();
localStorage.setItem('users', '0');
alert(localStorage.getItem('users'));

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
