import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: 'en', // язык по умолчанию
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // не экранируем HTML
  },
});

export default i18n;
