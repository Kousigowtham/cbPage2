import { combineReducers } from "redux";
import questionsReducer from "./questions/questionsReducer";
import learnAndMoreReducer from './learnAndMore/learnAndMoreReducer';

export default combineReducers({
    question: questionsReducer,
    hint : learnAndMoreReducer,
});