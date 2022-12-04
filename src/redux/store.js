import {createStore} from "redux"
import combinedReducer from "./combined-reducer"
const store = createStore(combinedReducer)

export default store