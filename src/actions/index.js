export const VIDEO_PLAY = 'VIDEO_PLAY';
export const video_play = () => {
    return {
        type: 'VIDEO_PLAY'
    };
};

export const VIDEO_PAUSE = 'VIDEO_PAUSE';
export const video_pause = () => {
    return {
        type: 'VIDEO_PAUSE',
    };
};

export const TIME_UP = 'TIME_UP';
export const time_up = (currentTime) => {
    return {
        type: 'TIME_UP',
        currentTime
    };
};

export const VIDEO_DURATION = 'VIDEO_DURATION';
export const video_duration = (videoDuration) => {
    return {
        type: 'VIDEO_DURATION',
        videoDuration
    };
};

export const VIDEO_VIEW = 'VIDEO_VIEW';
export const video_view = (currentTime, videoDuration) => {
    return {
        type: 'VIDEO_VIEW',
        videoView: (currentTime/videoDuration) *100,
    };
};