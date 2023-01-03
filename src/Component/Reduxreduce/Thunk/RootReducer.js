import { combineReducers } from "redux";
import Counter from "./CounterReducer/Counter";
import PostReducer from "./CounterReducer/PostReducer";
import UserReducer from "./CounterReducer/UserReducer";

export default combineReducers({
    counter: Counter,
    user: UserReducer,
    posts: PostReducer
})
