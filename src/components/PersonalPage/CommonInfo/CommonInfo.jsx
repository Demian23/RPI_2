import React from 'react';
import "./commonInfo.css"

const CommonInfo = (props) => {
    return (
        <div>
            <div className='common_container'>
                <div className='common_container__right'>
                    <h1>{props.name}</h1>
                    <h2>{props.birthDate} - {props.deathDate}</h2>
                </div>
                <img className="personImage" src={props.photo} alt="" width="500" height="400" id="hp"/>
            </div>
            <h3 className="personDescription">{props.description}</h3>
        </div>
    );
};

export default CommonInfo;