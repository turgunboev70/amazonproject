import { combineReducers } from "redux";
import { themeReducer, cartReducer } from "./reducer";


const combinedReducer = combineReducers({
    theme: themeReducer,
    cart : cartReducer
})

export default combinedReducer