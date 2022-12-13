import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const lng = localStorage.getItem('lng')

i18n.use(initReactI18next).init({
  lng: lng ?? 'en', 
  resources: {
    en: {
      translation: {
        "language": "Language",
        "main_page": "Main Page",
        "poets_list": "Poets List",
        "lng": "en",
        "search": "Search...",
        "return": "Back On Page"
      }
    },
    ru: {
      translation: {
        "language": "Язык",
        "main_page": "Главная Страница",
        "poets_list": "Список поэтов",
        "lng": "ru",
        "search": "Поиск...",
        "return": "На Страницу"
        }
    }
  }
});

export default i18n;