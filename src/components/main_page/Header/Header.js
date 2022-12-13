import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguageDetector from "./LanguageDetector"

function Header(){
    const { t } = useTranslation();
    return(
        <div className="header">
            <Link to="/">{t('main_page')}</Link>
            <Link to="/poets_list">{t('poets_list')}</Link>
            <LanguageDetector/>
        </div>
    );
}

export default Header;