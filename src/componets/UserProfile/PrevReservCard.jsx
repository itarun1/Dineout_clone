// Third party imports
import { useNavigate } from "react-router-dom";

// Styles Imports
import "./styles/prevcard.global.scss";

export const PrevReservCard = ({
	name,
	event_date,
	event_time,
	numGuests,
	image,
	id,
}) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`confirmed-bookings/${id}`);
			}}
			className="prev__reserv-card"
		>
			<img src={image[0]} width="110px" height="110px" alt="" />

			<div className="text__section">
				<h4 className="heading">{name}</h4>
				<p className="prev__address">Connaught Place, Delhi</p>
				<p className="date">
					{event_date.toLocaleString().split("T")[0]}, {event_time},{" "}
					{Number(event_time.split(":")) <= 3 ? "Lunch" : "Dinner"}
				</p>
				<span className="booking__status">
					<span className="bs_pair">
						<p>Diners</p>
						<p>{numGuests}</p>
					</span>
					<span className="bs_pair">
						<p>Booking ID</p>
						<p>{id.substring(5)}</p>
					</span>
					<span className="bs_pair">
						<p>Selected Offers</p>
						<p>No Offers</p>
					</span>
				</span>
			</div>
			<i className="material-icons right_arrow">chevron_right</i>
		</div>
	);
};
