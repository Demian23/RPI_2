import React from 'react';
import SingleVideo from './SingleVideo'
import "./videos.css"

const Videos = (props) => {
    return (
        <div className="videos">
            {props.videos.map((video, i) =>
                <SingleVideo className="video" key={i} currVideo={video}/>)}
        </div>
    );
};

export default Videos;