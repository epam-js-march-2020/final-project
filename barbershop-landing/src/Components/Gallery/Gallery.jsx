import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import BuildInCarousel from "../BuildInCarousel";
import { useTranslation } from 'react-i18next';

import './Gallery.css';

const Gallery = () => {
  const [t] = useTranslation();
  const [menHaircuts, setManHaircuts] = useState([]);
  const [womenHaircuts, setWomenHaircuts] = useState([]);
  const [beards, setBeards] = useState([]);
  const jsonBin = {
    root: 'https://api.jsonbin.io',
    binId: '5ec10d7d47a2266b1479de46', 
    binVersion: 'latest',
    key: '$2b$10$ltjATMhqY0JfYN5Mi1k1nOVTEQIGJwabv1R6Fb9CUjOUl7jTe6PwG',
  };

  async function fetchData() {
    console.log('fetchData');
    const response = await fetch([jsonBin.root, 'b', jsonBin.binId, jsonBin.binVersion].join('/'), {
      type: 'GET',
      headers: {
        'secret-key': jsonBin.key,
      }
    });
    response
      .json()
      .then(res => {
        setManHaircuts(res.menHairCuts); 
        setWomenHaircuts(res.womenHairCuts);
        setBeards(res.beards);
      })
  };

  useEffect(() => {
    console.log('useEffect');
    fetchData();
// eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h3 className="text-center">{t('gallery.title')}</h3>
      <h3 className="text-center">{t('gallery.men')}</h3>
      <BuildInCarousel imgArray={menHaircuts} />
      <hr />
      <h3 className="text-center">{t('gallery.women')}</h3>
      <BuildInCarousel imgArray={womenHaircuts} />
      <hr />
      <h3 className="text-center">{t('gallery.beards')}</h3>
      <BuildInCarousel imgArray={beards} />
    </Container>
  );
}

export default Gallery;
