import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Container>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Footer />
      </I18nextProvider>
    </Container>
  );
}

export default App;
