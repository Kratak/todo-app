import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, pl } from "./resources/translation/";

i18n.use(initReactI18next).init({
  lng: "pl",
  debug: false,
  resources: {
    en: { ...en },
    pl: { ...pl },
  },
});

export default i18n;
