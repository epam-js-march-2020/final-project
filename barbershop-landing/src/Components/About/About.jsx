import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import BuildInCarousel from "../BuildInCarousel";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import './About.css';

const About = () => {
  const [t] = useTranslation();
  const [avatars, setAvatars] = useState([]);
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);
  const jsonBin = {
    root: 'https://api.jsonbin.io',
    binIdEmployee: '5ec06669a47fdd6af16469bd', 
    binIdCarousel: '5ec0837da47fdd6af164767c',
    binVersion: 'latest',
    key: '$2b$10$ltjATMhqY0JfYN5Mi1k1nOVTEQIGJwabv1R6Fb9CUjOUl7jTe6PwG',
  };

  async function fetchEmployeeData() {
    const response = await fetch([jsonBin.root, 'b', jsonBin.binIdEmployee, jsonBin.binVersion].join('/'), {
      type: 'GET',
      headers: {
        'secret-key': jsonBin.key,
      }
    });
    response
      .json()
      .then(res => {
        i18n.addResourceBundle('en', 'common', { employees: res.en });
        i18n.addResourceBundle('ru', 'common', { employees: res.ru });
        return res;
      })
      .then(res => {
        setAvatars(res.photos); 
        setNames(res.names);
      })
  };

  async function fetchCarouselData() {
    const response = await fetch([jsonBin.root, 'b', jsonBin.binIdCarousel, jsonBin.binVersion].join('/'), {
      type: 'GET',
      headers: {
        'secret-key': jsonBin.key,
      }
    });
    response
      .json()
      .then(res => setImages(res));
  }

  useEffect(() => {
    fetchEmployeeData();
    fetchCarouselData();
// eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h3 className="text-center">{t('about.team')}</h3>
      { names.map((name, i) => (
        <div className="card mb-3 w-100 mx-auto border-0" key={i}>
          <div className={`row align-items-center no-gutters ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="col-md-4 ">
              <img src={avatars[i]} className={`card-img mx-auto employee-avatar rounded-circle ${i % 2 === 1 ? "float-right float-md-left" : "float-left float-md-right"}`} alt={`${name}Avatar`} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className={`card-title ${i % 2 === 1 ? "text-right" : null}`}>{t(`employees.${name}.name`)}</h5>
                <p className={`card-text ${i % 2 === 1 ? "text-right" : null}`} >{t(`employees.${name}.quote`)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h3 className="text-center">{t('about.shop')}</h3>
      <BuildInCarousel imgArray={images} />
    </Container>
  );
}

export default About;
