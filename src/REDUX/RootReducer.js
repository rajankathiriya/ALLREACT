import { combineReducers } from "redux";
import Reducer from "./Reducer";

const ROOTREDUCER = combineReducers({
    newTest: Reducer
})

export default ROOTREDUCER