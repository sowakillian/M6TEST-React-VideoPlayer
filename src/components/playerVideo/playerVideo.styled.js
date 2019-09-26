import styled from 'styled-components';
import pauseButton from '../assets/images/002-pause-symbol.png';

export const PlayerVideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 40px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const PlayerPauseIndicator = styled.div`
  height: 80px;
  width: 80px;
  transition:visibility 0.3s linear,opacity 0.3s linear;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${pauseButton});
`;

