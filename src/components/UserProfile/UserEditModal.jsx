import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/Login/actions";

// Inner Imports
import { Button } from "./styled-components/Button";
import { UModal } from "./styled-components/UModal";

export const UserEditModal = ({ handleModal }) => {
	const { loggedInUser } = useSelector((store) => store.loginReducer);
	console.log(loggedInUser);
	const dispatch = useDispatch();

	const nameRef = useRef();
	const mobileRef = useRef();
	const emailRef = useRef();
	return (
		<UModal>
			<div className="topHeading">
				<h2>Edit User Profile</h2>
				<i onClick={() => handleModal(false)} className="material-icons">
					close
				</i>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					const payload = {
						name: nameRef.current.value,
						email: emailRef.current.value,
						mobile: mobileRef.current.value,
						id: loggedInUser.id,
						prevReservations: loggedInUser.prevReservations
					};

					if (!payload.email || !payload.mobile || !payload.name) {
						alert("Fill All Values");
						return;
					}

					dispatch(updateUser(payload));
					handleModal(false);
				}}
				className="editForm"
			>
				<input
					ref={nameRef}
					type="text"
					placeholder="Enter Your Name"
					defaultValue={loggedInUser.name || ""}
				/>
				<input
					ref={mobileRef}
					type="text"
					placeholder="Enter Mobile No"
					defaultValue={loggedInUser.mobile || ""}
				/>
				<input
					ref={emailRef}
					type="text"
					placeholder="Enter Email "
					defaultValue={loggedInUser.email || ""}
				/>
				<Button wd="50%">Update Profile</Button>
			</form>
		</UModal>
	);
};
