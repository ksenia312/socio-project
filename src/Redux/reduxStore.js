import {combineReducers, createStore} from "redux";
import enterReducer from "./enterReducer";
import dicsussionReducer from "./discussionReducer";

let reducers = combineReducers(
    {
        enter:enterReducer,
        discussion:dicsussionReducer
    }
);
let store = createStore(reducers);

export default store