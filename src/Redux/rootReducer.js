import { combineReducers } from "redux";
import homeReducer from '../Redux/homeRedux/home.reducer'

const rootReducer = combineReducers({
    home: homeReducer
})


export default rootReducer