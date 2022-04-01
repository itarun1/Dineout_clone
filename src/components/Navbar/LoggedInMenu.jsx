import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/Login/actions";
import { NavSelect } from "./styled-components/NavSelect";

export const LoggedInMenu = () => {
	const [select, setSelect] = useState(false);
	const navigate = useNavigate();
	const { loggedInUser, isLoading } = useSelector(
		(store) => store.loginReducer
	);

	const dispatch = useDispatch();
	const toggleSelect = () => {
		setSelect(!select);
	};
	return isLoading ? (
		<p>Loading...</p>
	) : (
		<NavSelect isSelect={select} border="none" width="150px">
			<p className="first_last_name">
				{loggedInUser.name
					.split(" ")
					.map((c) => c.charAt(0).toUpperCase())
					.join("")}
			</p>
			<p onClick={() => toggleSelect()}>My Account</p>
			<i className="material-icons down_arrow">arrow_drop_down</i>

			<div className="drop_down">
				<p
					onClick={() => {
						navigate(`/users/${loggedInUser.id}`);
						toggleSelect();
					}}
				>
					Profile
				</p>
				<p>Coupon History</p>
				<p
					onClick={() => {
						navigate("/");
						dispatch(logOut());
						localStorage.removeItem("loggedinuser");
					}}
				>
					Logout
				</p>
			</div>
		</NavSelect>
	);
};
