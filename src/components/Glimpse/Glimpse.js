import React from 'react';
import VideoPlayer from 'react-video-js-player';

import "./styles.css"

import tut from '../../images/Untitled.mp4';
import posterRoute from '../../images/poster.jpg';

const Glimpse = () => {
    const videoscr = tut;
    const post = posterRoute;
    return (
        <div className="container">
            <div className="glimpseWrapper">
                <div className="textData">
                    <div className="textheading">
                        <p>
                            Glimpse of our Actual Sessions
                        </p>
                    </div>
                    <div className="actualData">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="videoData">
                    <VideoPlayer
                        className="videoDiv"
                        src={videoscr}
                        poster={post}
                        width="400"
                        height="320"
                    />
                </div>
            </div>
        </div>
    )
}

export default Glimpse
