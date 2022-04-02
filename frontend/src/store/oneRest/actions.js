import { SEND_REST, DEL_REST } from "./actionTypes";

export const sendRest = (payload) => {
	return {
		type: SEND_REST,
		payload,
	};
};

export const delRest = () => {
	return { type: DEL_REST };
};
