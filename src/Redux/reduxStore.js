import {combineReducers, createStore} from "redux";
import enterReducer from "./enterReducer";

let reducers = combineReducers(
    {
        enter:enterReducer,
    }
);
let store = createStore(reducers);

export default store