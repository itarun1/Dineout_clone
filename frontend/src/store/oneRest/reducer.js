import { SEND_REST, DEL_REST } from "./actionTypes";

const init = {
	oneRest: {},
};

export const oneRestReducer = (state = init, { type, payload }) => {
	switch (type) {
		case SEND_REST:
			return { ...state, oneRest: payload };
		case DEL_REST:
			return { ...state, oneRest: {} };
		default:
			return { ...state };
	}
};
