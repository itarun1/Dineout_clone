import { USER_IN, USER_OUT } from "./actionTypes";

export const userLogin = (payload) => {
	return { type: USER_IN, payload };
};
export const userLogout = () => {
	return { type: USER_OUT };
};
