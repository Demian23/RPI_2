import React from 'react';

const SingleVideo = (props) => {
    return (
        <div>
            <iframe className="video" src={props.currVideo} title="Youtube video" allowFullScreen></iframe>
        </div>
    );
};

export default SingleVideo;