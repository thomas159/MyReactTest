import { combineReducers } from 'redux';
import  GithubReducer  from "./reducer_github";
import { reducer as formReducer } from "redux-form";


const rootReducer = combineReducers({
	users: GithubReducer,
	form: formReducer
});

export default rootReducer;
