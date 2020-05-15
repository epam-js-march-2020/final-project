import i18n from 'i18next';
import { en, ru } from './locales';

const options = {
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  lng: 'en',
  resources: {
    ru: {
      common: ru.ru,
    },
    en: {
      common: en.en,
    },
  },
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n.init(options)

export default i18n;
