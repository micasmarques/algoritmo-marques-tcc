import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './i18n/translations/en.json';
import translationPT from './i18n/translations/pt.json';

const resources = {
    en: {
        translation: translationEN
    },
    pt: {
        translation: translationPT
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
