// Styles Imports
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/singlePrevReserv.scss";
export const SinglePrevReservDetails = () => {
	const { loggedInUser } = useSelector((store) => store.loginReducer);
	const { id, pID } = useParams();
	const requiredUser = loggedInUser.prevReservations.find(
		(oneUser) => oneUser._id === pID
	);

	console.log(requiredUser);
	return (
		<div className="single_prev_details">
			<h1 className="mainHeading">Warehouse Cafe</h1>
			<p>Connaught Place, Central Delhi, Delhi</p>
			<div className="guest__details">
				<h2 className="heading">Guest Details</h2>
				<span className="guest__details-name">
					<p>Guest Name</p>
					<p>{requiredUser.guestName}</p>
				</span>
				<span className="guest__details-phone">
					<p>Phone no:</p>
					<p>{requiredUser.guestNumber}</p>
				</span>
			</div>
			<div className="booking__summary">
				<h2 className="heading">Booking Summary</h2>
				<span className="summary-status">
					<p>Pending</p>
					<p>You're on waiting list.</p>
				</span>
				<span className="summary-date">
					<p>Date & Time</p>
					<p>
						{requiredUser.event_date.toLocaleString().split("T")[0]} at{" "}
						{requiredUser.event_time}
					</p>
				</span>
				<span className="summary-num__guests">
					<p>Guests</p>
					<p>{requiredUser.numGuests} Guests</p>
				</span>
				<span className="summary-id">
					<p>ID</p>
					<p>{requiredUser._id.substring(5)}</p>
				</span>
			</div>
		</div>
	);
};
