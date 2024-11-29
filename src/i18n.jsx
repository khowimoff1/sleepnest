import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzLanguageTranslate from '../public/locals/uz.json';
import ruLanguageTranslate from '../public/locals/ru.json';
import engLanguageTranslate from '../public/locals/eng.json';

const language = localStorage.getItem('i18nextLng') || 'uz';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    lng:language,
    debug: true,
    resources:{
        uz:{translation: uzLanguageTranslate},
        ru:{translation: ruLanguageTranslate},
        eng:{translation: engLanguageTranslate}
    }
  });


export default i18n;