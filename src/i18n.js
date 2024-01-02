import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './components/Header/translations';

i18n.use(initReactI18next).init({
    resources: translations,
    lng: 'ua',
    interpolation: {
        escapeValue: false,
    },
});