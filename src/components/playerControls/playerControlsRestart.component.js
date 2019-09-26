import React, { useState, useEffect } from 'react';
import {
    PlayerControlsRestartWrapper
} from './playerControls.styled';
import { useSelector } from "react-redux";


export const PlayerControlsRestart = (props) => {

    const restartVideo = () => {
        props.videoRef.current.currentTime = 0;
    };

    return(
        <PlayerControlsRestartWrapper
            onClick={restartVideo}
        />
    )
};