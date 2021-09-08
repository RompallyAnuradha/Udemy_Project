import { combineReducers } from "redux";
import { CoursesReducer } from "./Components/reducers/reducer";
import { authReducer } from "./Components/reducers/authReducer";
export const rootReducer = combineReducers({
     CoursesReducer,
     authReducer
})