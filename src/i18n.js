import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./components/Header/translations";

const saveLng = localStorage.getItem("lng");

//todo: Языки без localStorage
i18n.use(initReactI18next).init({
  resources: translations,
  lng: saveLng?.toLowerCase() || "ru",
  supportedLngs: ["ua", "ru", "en"],
  interpolation: {
    escapeValue: false,
  },
});
