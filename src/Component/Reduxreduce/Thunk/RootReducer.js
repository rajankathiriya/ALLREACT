import { combineReducers } from "redux";
import Counter from "./CounterReducer/Counter";

export default combineReducers({
    counter: Counter
})
