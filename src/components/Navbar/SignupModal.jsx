import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Inner Imports
import {
	closeSignupPopup,
	logIn,
	postUserData,
} from "../../store/Login/actions";
import { Button } from "./styled-components/Button";
import { Lmodal } from "./styled-components/Lmodal";

export const SignupModal = () => {
	const { signUp, isLoading } = useSelector((store) => store.loginReducer);
	useEffect(() => {
		console.log(signUp);
	}, [signUp]);

	const dispatch = useDispatch();
	const nameRef = useRef();
	const phoneNumberRef = useRef();
	const emailRef = useRef();

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<Lmodal>
			<span className="topHeading">
				<h2>Signup</h2>
				<i
					onClick={() => {
						dispatch(closeSignupPopup());
					}}
					className="material-icons"
				>
					close
				</i>
			</span>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (
						!nameRef.current.value ||
						!phoneNumberRef.current.value ||
						!emailRef.current.value
					) {
						alert("Fill all required values");
						return;
					}
					if (isNaN(phoneNumberRef.current.value)) {
						alert("Invalid Phone Number");
						return;
					}
					const payload = {
						name: nameRef.current.value,
						mobile: phoneNumberRef.current.value,
						email: emailRef.current.value,
						prevReservations: [],
					};
					dispatch(postUserData(payload));
					dispatch(logIn());
				}}
				className="signupForm"
			>
				<input ref={nameRef} type="text" placeholder="Enter your Full Name" />
				<input
					ref={phoneNumberRef}
					type="text"
					placeholder="Enter your Mobile Number"
				/>
				<input ref={emailRef} type="text" placeholder="Enter your Email ID" />
				<Button wd="100%">Sign Up</Button>
			</form>
		</Lmodal>
	);
};
