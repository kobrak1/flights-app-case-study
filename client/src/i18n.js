import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)  // Load translations using http
  .use(LanguageDetector)  // Detect user's language
  .use(initReactI18next)  // Pass i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'fr', 'de'], // List of supported languages
    fallbackLng: 'en',  // Fallback language
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'], // Cache the selected language in cookies
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',  // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
