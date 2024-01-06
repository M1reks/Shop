import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./components/Header/translations";

const lng = localStorage.getItem("lng");

i18n.use(initReactI18next).init({
  resources: translations,
  lng: lng.toLowerCase(),
  interpolation: {
    escapeValue: false,
  },
});
