import {
	CLOSE_POPUP,
	CLOSE_SIGNUP_POPUP,
	DATA_LOADING_FALSE,
	DATA_LOADING_TRUE,
	DEL_LOGGED_IN_USER,
	LOG_IN,
	LOG_OUT,
	OPEN_POPUP,
	OPEN_SIGNUP_POPUP,
	SET_LOGGED_IN_USER,
	SIGNUP,
	TOGGLE_POPUP,
	TOGGLE_SIGNUP_POPUP,
} from "./actionTypes";

const init = {
	isLoggedIn: false,
	isPopupOn: false,
	isSignupPopupOn: false,
	signUp: false,
	isLoading: false,
	loggedInUser: {},
};

export const loginReducer = (state = init, { payload, type }) => {
	switch (type) {
		case TOGGLE_POPUP:
			return { ...state, isPopupOn: !state.isPopupOn };

		case TOGGLE_SIGNUP_POPUP:
			return { ...state, isSignupPopupOn: !state.isSignupPopupOn };

		case OPEN_POPUP:
			return { ...state, isPopupOn: true };

		case CLOSE_POPUP:
			return { ...state, isPopupOn: false };

		case OPEN_SIGNUP_POPUP:
			return { ...state, isSignupPopupOn: true };

		case CLOSE_SIGNUP_POPUP:
			return { ...state, isSignupPopupOn: false };

		case LOG_IN:
			return { ...state, isLoggedIn: true };

		case LOG_OUT:
			return { ...state, isLoggedIn: false, loggedInUser: {} };

		case SET_LOGGED_IN_USER:
			return { ...state, isLoggedIn: true, loggedInUser: payload };

		case DEL_LOGGED_IN_USER:
			return { ...state, isLoggedIn: false, loggedInUser: {} };

		case SIGNUP:
			return { ...state, isSignupPopupOn: true };

		case DATA_LOADING_TRUE:
			return { ...state, isLoading: true };

		case DATA_LOADING_FALSE:
			return { ...state, isLoading: false };
		default:
			return { ...state };
	}
};
