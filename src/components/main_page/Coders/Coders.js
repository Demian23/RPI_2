import React from "react";
import './coders.css'
import imgEgor from './../img/Egor.jpg'
import imgAlexandr from './../img/Alexandr.jpg'
import imgRoman from './../img/Roman.jpg'
import { useTranslation } from "react-i18next";

function Coder(props){
    return (
        <div className="coder__container">
            <img className="coder__image" src={props.info.img} alt="developer_photo" />
            <h3 className="coder__name">{props.info.cName}</h3>
            <a className="coder__github" href={props.info.github}>github</a>
        </div>
    )
}

function Coders(){
    const information = [  {img: imgEgor , github: "https://github.com/Demian23", cName:"Egor Rusakovich"}, 
                {img: imgAlexandr, github: "https://github.com/Bel1eveme", cName: "Alexandr Ravodin"}, 
                {img: imgRoman , github: "https://github.com/RomanRedkovskiy", cName: "Roman Redkovskiy"}
            ];

    return (
        <div className="coders__container">
            {information.map((i, index) => <Coder key={index} info={i} />)}
        </div>
        );
}

export default Coders;