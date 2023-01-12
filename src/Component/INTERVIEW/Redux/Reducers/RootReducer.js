import { combineReducers } from 'redux'
import Reducer from './Reducer'

const rootReducer = combineReducers({
    numincdec: Reducer
})

export default rootReducer