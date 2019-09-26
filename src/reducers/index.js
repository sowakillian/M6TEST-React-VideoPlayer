import player from "./player.reducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    player,
});

export default allReducers;
