import styled from "styled-components";
import playButton from '../assets/images/001-play-button.png';
import pauseButton from '../assets/images/002-pause-symbol.png';
import restartButton from '../assets/images/update-arrow.png';
import volumeButton from '../assets/images/loud.png'

export const PlayerControlsWrapper = styled.div`
  width: 780px;
  height: 40px;
  background-color: midnightblue;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerControlsPlay = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${pauseButton});
  margin-right: 20px;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
`;

export const PlayerControlsPause = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  background-image: url(${playButton});
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
`;

export const PlayerControlsSeekBar = styled.div`
  width: 500px;
  height: 5px;
  background-color: darkgrey;
  margin-left: 20px;
  position: relative;
`;

export const PlayerControlsSeekBarView = styled.div`
  width: ${props => props.videoView}%;
  height: 5px;
  background-color: darkred;
  position: relative;
  top: 0;
  left: 0;
`;

export const PlayerControlsSeekBowl = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid darkred;
  background-color: darkred;
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  
  &:hover {
  cursor: pointer;
    color: red;
    transition: all 0.2s ease;
  }
`;

export const PlayerControlsRestartWrapper = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${restartButton});
   background-size: cover;
  background-position: center;
  margin-left: 20px;
`;

export const PlayerControlsVolumeWrapper = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${volumeButton});
   background-size: cover;
  background-position: center;
  margin-left: 20px;
  opacity: ${props => props.opacity};
`;