import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <Header history={history} />
      <Main />
    </div>
  );
}

export default App;
