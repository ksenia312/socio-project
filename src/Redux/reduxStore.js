import {combineReducers, createStore} from "redux";
import enterReducer from "./enterReducer";
import dicsussionReducer from "./discussionReducer";
import inGameReducer from "./inGameReducer";

let reducers = combineReducers(
    {
        enter:enterReducer,
        discussion:dicsussionReducer,
        inGame:inGameReducer
    }
);
let store = createStore(reducers);

export default store