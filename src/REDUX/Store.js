import { createStore } from "redux";
import ROOTREDUCER from "./RootReducer";

const storeNew = createStore(ROOTREDUCER)


export default storeNew