import React from "react"; //newer syntax of require

const VideoDetail = ({video}) => { //constant reference, cannot be reassigned
//instead of props.video, can use curly brackets to grab it
    if (!video) {
        return <p>Loading spinner goes here...</p>
    }
    console.log(video);

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </>
    )
};

export default VideoDetail;