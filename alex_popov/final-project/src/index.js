import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './js/App';

import './css/index.scss';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from './js/reducers/reducers';

import * as data from './localStorageData'

/**
 * creates the needed data in the local storage
 */

// localStorage.clear()
data.loadData();

const store = createStore( combineReducers(reducers) );

const render = () => {
  ReactDOM.render(
    
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,

    document.getElementById('root')
  );
}

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();