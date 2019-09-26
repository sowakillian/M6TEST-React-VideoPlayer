import {
    VIDEO_PAUSE,
    VIDEO_DURATION,
    VIDEO_PLAY,
    VIDEO_VIEW,
    TIME_UP
} from '../actions';

const initialState = {
    currentTime: 0,
    videoView: 0,
    videoDuration: 0,
    videoPaused: true,
};

export default function(state = initialState, action) {
    switch (action.type) {
         case VIDEO_PLAY:
             return {
                 ...state,
                 videoPaused: false,
             };

         case VIDEO_PAUSE:
             return {
                 ...state,
                 videoPaused: true,
             };

        case VIDEO_DURATION:
            return {
                ...state,
                videoDuration: action.videoDuration,
            };

        case VIDEO_VIEW:
            return {
                ...state,
                videoView: action.videoView,
            };

        case TIME_UP:
            return {
                ...state,
                currentTime: action.currentTime,
            };

        default:
            return state;
    }
}




// case VIDEO_DURATION:
//     if (state.duration === action.duration) {
//         return state;
//     }
//
// return {...state, duration: state.duration};

// export const currentTimeReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'TIME_UP':
//             return action.currentTime;
//         default:
//             return state;
//     }
// };



// export const restartVideoReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'VIDEO_RESTART':
//             return state = 0;
//         default:
//             return state;
//     }
// };
//
// export const playerVideoReducer = (state = false, action) => {
//     switch (action.type) {
//         case 'VIDEO_PLAY':
//             return state = true;
//         case 'VIDEO_PAUSE':
//             return state = false;
//         default:
//             return state;
//     }
// };
//
// export const videoDurationReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'VIDEO_DURATION':
//             return action.videoDuration;
//         default:
//             return state;
//     }
// };
//
// export const videoViewReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'VIDEO_VIEW':
//             return action.videoView;
//         default:
//             return state;
//     }
// };


