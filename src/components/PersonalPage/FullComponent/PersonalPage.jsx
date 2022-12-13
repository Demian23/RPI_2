import React from 'react';
import TimeLine from "../TimeLine/TimeLine";
import Gallery from "../Gallery/Gallery";
import CommonInfo from "../CommonInfo/CommonInfo";
import Map from "../Location/Map";
import Videos from "../Videos/Videos";

const PersonalPage = (props) => {
    return (
        <div className='person_page'>
            <CommonInfo name={props.currentPerson.fullName}
                        photo={props.currentPerson.mainPhoto}
                        birthDate={props.currentPerson.birthDate}
                        deathDate={props.currentPerson.deathDate}
                        description={props.currentPerson.description}
            />
            <TimeLine number={props.currentPerson.id}/>
            <Gallery photos={props.currentPerson.photos}/>
            <Map coords={props.currentPerson.coords} place={props.currentPerson.place}/>
            <Videos videos={props.currentPerson.videos}/>
        </div>
    );
};

export default PersonalPage;