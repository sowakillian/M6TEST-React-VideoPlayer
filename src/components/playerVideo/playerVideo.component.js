import React, {useRef} from 'react';
import {
    PlayerVideoWrapper,
    PlayerPauseIndicator,
} from './playerVideo.styled';
import { PlayerControls} from "../playerControls/playerControls.component";
import {video_pause, video_play, time_up, video_duration, video_view} from '../../actions/'
import {useDispatch, useSelector} from "react-redux";

export const PlayerVideo = () => {

    const videoRef = useRef();

    const dispatch = useDispatch();
    const videoPaused = useSelector(state => state.player.videoPaused);
    const videoView = useSelector(state => state.player.videoView);

    const getCurrentTime = () => {
        dispatch(time_up(videoRef.current.currentTime));
        dispatch(video_view(videoRef.current.currentTime, videoRef.current.duration));
    };

    const getVideoDuration = () => {
        dispatch(video_duration(videoRef.current.duration))
    };


    const changeVideoState = () => {
        if (!videoPaused) {
            videoRef.current.pause();
            dispatch(video_pause())
        } else {
            videoRef.current.play();
            dispatch(video_play());
        }
    };

    return(

        <PlayerVideoWrapper>

            {videoPaused ? <PlayerPauseIndicator /> : ''}

                <video
                    ref={videoRef}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    width={"790"}
                    height={"440"}
                    className="videoPlayer"
                    onClick={changeVideoState}
                    onTimeUpdate={getCurrentTime}
                    onLoadedMetadata={getVideoDuration}
                />

            <PlayerControls
                videoView = {videoView}
                videoRef = {videoRef}
            />


        </PlayerVideoWrapper>
    )
};