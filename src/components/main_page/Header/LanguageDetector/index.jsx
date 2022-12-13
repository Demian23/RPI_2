import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageDetector.css"

export default function LanguageDetector(props) {
    const availableLng = ["en", "ru"];
    const { t, i18n } = useTranslation();
    const currentLng = i18n.language;
    
    const onChangeHandler = (e) => {
        const selectedLng = e.target.value;
        i18n.changeLanguage(selectedLng, () => {
            localStorage.setItem("lng", selectedLng);
        });
    };

    return (
        <div className="language-container">
        <label htmlFor="language">{t('language')}</label>
        <select onChange={onChangeHandler}  name="language" id="language-select">
            {availableLng.map((el) => {
                    let option;
                    if(el===currentLng){
                        option = <option value = {el} selected>{el}</option>;
                    } else{
                        option = <option value={el}>{el}</option>
                    }
                    return option;
            })}
        </select>
        </div>
    );
}