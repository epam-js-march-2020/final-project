import en from './default.json';
import ru from './default.ru.json';

import footerEn from '../../Components/Footer/locales/default.json';
import footerRu from '../../Components/Footer/locales/default.ru.json';
import headerEn from '../../Components/Header/locales/default.json';
import headerRu from '../../Components/Header/locales/default.ru.json';
import navListEn from '../../Components/NavList/locales/default.json';
import navListRu from '../../Components/NavList/locales/default.ru.json';
import aboutEn from '../../Components/About/locales/default.json';
import aboutRu from '../../Components/About/locales/default.ru.json';

ru['ru'].footer = footerRu['ru'];
en['en'].footer = footerEn['en'];
ru['ru'].header = headerRu['ru'];
en['en'].header = headerEn['en'];
ru['ru'].navList = navListRu['ru'];
en['en'].navList = navListEn['en'];
ru['ru'].about = aboutRu['ru'];
en['en'].about = aboutEn['en'];

export {
  en,
  ru,
};
