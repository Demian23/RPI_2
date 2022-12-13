import React from "react";
import './DayHero.css'
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

function DayHero(props){
    const { t } = useTranslation();
    return(
        <div className="DayHero__container">
            <img className="DayHero__img" src={props.info.img} alt="Day hero"/>
            <h2 className="DayHero__name">{props.info.name}</h2>
            <h3 className="DayHero__life">{props.info.birthDate} - {props.info.deathDate}</h3>
            <h4 className="DayHero__text">{props.info.description}</h4>
            <Link to="/day_hero__page">{t('return')}</Link>
        </div>
    );
}

export default DayHero;