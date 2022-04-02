import axios from "axios";

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

export const togglePopup = () => {
	return { type: TOGGLE_POPUP };
};

export const toggleSignupPopup = () => {
	return { type: TOGGLE_SIGNUP_POPUP };
};

export const openPopup = () => {
	return { type: OPEN_POPUP };
};

export const closePopup = () => {
	return { type: CLOSE_POPUP };
};

export const openSignupPopup = () => {
	return { type: OPEN_SIGNUP_POPUP };
};

export const closeSignupPopup = () => {
	return { type: CLOSE_SIGNUP_POPUP };
};

export const logIn = () => {
	return { type: LOG_IN };
};

export const logOut = () => {
	return { type: LOG_OUT };
};

export const setLoggedIn = (payload) => {
	return { type: SET_LOGGED_IN_USER, payload };
};

export const delLoggedIn = () => {
	return { type: DEL_LOGGED_IN_USER };
};

export const signUp = () => {
	return { type: SIGNUP };
};

export const setLoadingTrue = () => {
	return { type: DATA_LOADING_TRUE };
};

export const setLoadingFalse = () => {
	return { type: DATA_LOADING_FALSE };
};

export const fetchUser = (payload) => (dispatch) => {
	dispatch(setLoadingTrue());
	fetch(
		`https://isharaman-08-fakeserver.herokuapp.com/users?email=${String(
			payload
		)}`
	)
		.then((api) => api.json())
		.then((data) => {
			if (data.length === 0) {
				dispatch(signUp());
			} else {
				dispatch(setLoggedIn(data[0]));
				localStorage.setItem("loggedinuser", JSON.stringify(data[0]));
			}
		})
		.finally(() => {
			dispatch(setLoadingFalse());
		});
};

export const postUserData = (payload) => (dispatch) => {
	dispatch(setLoadingTrue());
	axios
		.post(`https://isharaman-08-fakeserver.herokuapp.com/users`, payload)
		.then((data) => {
			dispatch(setLoggedIn(data.data));
			dispatch(closeSignupPopup());
			localStorage.setItem("loggedinuser", JSON.stringify(data.data));
		})
		.catch((err) => console.log(err))
		.finally(() => {
			dispatch(setLoadingFalse());
		});
};

export const updateUser = (payload) => (dispatch) => {
	dispatch(setLoadingTrue());
	axios
		.patch(
			`https://isharaman-08-fakeserver.herokuapp.com/users/${payload.id}`,
			payload
		)
		.then(() => {
			dispatch(setLoggedIn(payload));
			localStorage.setItem("loggedinuser", JSON.stringify(payload));
		})
		.finally(() => {
			dispatch(setLoadingFalse());
		});
};

export const checkUser = (payload) => (dispatch) => {
	dispatch(setLoadingTrue());
	fetch(
		`https://isharaman-08-fakeserver.herokuapp.com/users?email=${payload.email}`
	)
		.then((api) => api.json())
		.then((data) => {
			if (data.length === 0) {
				fetch(`https://isharaman-08-fakeserver.herokuapp.com/users`, {
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"content-type": "application/json",
					},
				})
					.then((api) => api.json())
					.then((data) => dispatch(setLoggedIn(data)));
			} else {
				localStorage.setItem("loggedinuser", JSON.stringify(data[0]));
				dispatch(setLoggedIn(data[0]));
			}
		})
		.finally(() => {
			dispatch(setLoadingFalse());
		});
};
