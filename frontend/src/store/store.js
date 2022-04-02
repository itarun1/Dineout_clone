// Third Party Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Inner Imports
import { otherReducer } from "./Restaurants/reducer";
import { loginReducer } from "./Login/reducer";
import { authReducer } from "./authRedux/reducer";
import {oneRestReducer} from "./oneRest/reducer"

const combinedReducer = combineReducers({
	loginReducer,
	otherReducer,
	authReducer,
	oneRestReducer,
});

export const store = createStore(
	combinedReducer,
	composeWithDevTools(applyMiddleware(thunk))

	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
