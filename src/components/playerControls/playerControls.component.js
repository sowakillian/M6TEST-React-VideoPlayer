import React, { useState, useEffect } from 'react';
import {
    PlayerControlsWrapper,
    PlayerControlsPause,
    PlayerControlsPlay,
    PlayerControlsSeekBar,
    PlayerControlsSeekBarView,
    PlayerControlsSeekBowl
} from './playerControls.styled';
import { useSelector } from "react-redux";
import {PlayerControlsRestart} from "./playerControlsRestart.component";
import {PlayerControlsVolume} from "./playerControlsVolume.component";


export const PlayerControls = (props) => {

    const videoState = useSelector(state => state.player.videoPaused);
    const currentTime = useSelector(state => state.player.currentTime);

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime);

    const videoDuration = useSelector(state => state.player.videoDuration);
    const durationMinutes = Math.floor(videoDuration / 60);
    const durationSeconds = Math.floor(videoDuration);

    const videoView = useSelector(state => state.player.videoView);

    return(

        <PlayerControlsWrapper>

            { videoState ? <PlayerControlsPlay /> : <PlayerControlsPause />}

            <p>{currentMinutes}:{currentSeconds}  /  {durationMinutes}:{durationSeconds} </p>

            <PlayerControlsSeekBar>
                <PlayerControlsSeekBarView
                    videoView = {videoView}
                >
                    <PlayerControlsSeekBowl />
                </PlayerControlsSeekBarView>
            </PlayerControlsSeekBar>

            <PlayerControlsRestart
                videoRef = {props.videoRef}
            />

            <PlayerControlsVolume
                videoRef = {props.videoRef}
            />


        </PlayerControlsWrapper>
    )
};