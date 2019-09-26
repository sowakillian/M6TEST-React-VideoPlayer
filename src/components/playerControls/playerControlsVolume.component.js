import React, { useState, useEffect } from 'react';
import {
    PlayerControlsVolumeWrapper
} from './playerControls.styled';
import { useSelector } from "react-redux";


export const PlayerControlsVolume = (props) => {

    const [ opacity, setOpacity ] = useState(1);


    const toggleVolume = () => {
        if (props.videoRef.current.volume > 0) {
            props.videoRef.current.volume = 0;
            setOpacity(0.3);
        } else {
            props.videoRef.current.volume = 1;
            setOpacity(1);
        }
    };

    return(
        <PlayerControlsVolumeWrapper
            onClick={toggleVolume}
            opacity={opacity}
        />
    )
};