import { USER_IN, USER_OUT } from "./actionTypes";

const init = {
	socialUser: {},
};

export const authReducer = (state = init, { type, payload }) => {
	switch (type) {
		case USER_IN:
			return { ...state, socialUser: payload };
		case USER_OUT:
			return { ...state, socialUser: {} };
		default:
			return { ...state };
	}
};
