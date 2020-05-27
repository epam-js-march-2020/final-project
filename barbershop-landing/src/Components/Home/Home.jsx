import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';

const Home = () => {
  const [t] = useTranslation();
  return (
    <Container>
      <h2 className="text-center">{t('home.welcome')}</h2>
      <hr />
      <h3 className="text-center">{t('home.team')}</h3>
      <p>{t('home.about.team')}</p>
      <h3 className="text-center">{t('home.services')}</h3>
      <p>{t('home.about.services')}</p>
      <h3 className="text-center">{t('home.time')}</h3>
      <p>{t('home.about.time')}</p>
    </Container>
  );
}

export default Home;
