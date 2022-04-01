// Third Party imports
import { useState } from "react";
import { useSelector } from "react-redux";

// Inner Imports
import { PrevReservCard } from "./PrevReservCard";
import { UserInfoEdits } from "./UserInfoEdits";
import { UserEditModal } from "./UserEditModal";

// Styles Imports
import "./styles/userprofile.global.scss";

export const UserProfile = () => {
	const [openModal, setOpenModal] = useState(false);
	const { loggedInUser } = useSelector((store) => store.loginReducer);

	const toggleModal = (value) => {
		setOpenModal(value);
	};

	return (
		<div className="userProfile">
			<UserInfoEdits handleModal={toggleModal} />
			<div className="bottomSection">
				<div className="prevReservations left">
					<h2 className="heading">Previous Reservations</h2>
					{loggedInUser.prevReservations.map((oneReservation) => {
						const {
							name,
							event_date,
							event_time,
							numGuests,
							guestName,
							guestNumber,
							image_urls,
							_id,
						} = oneReservation;
						return (
							<PrevReservCard
								name={name}
								event_date={event_date}
								event_time={event_time}
								numGuests={numGuests}
								guestName={guestName}
								guestNumber={guestNumber}
								image={image_urls}
								id={_id}
							/>
						);
					})}
				</div>
				<div className="right">
					<div className="totalSavings">
						<h1>
							Total Savings <span className="savedPrice">0</span>
						</h1>
						<p>
							*This is an approximate amount based on your total no of bookings
							and discounts applicable on the restaurant.
						</p>
					</div>
					<div className="dineoutpay">
						<h1>
							<i className="material-icons">account_balance_wallet</i>Dineout
							Pay
						</h1>
						<p>
							Download the Dineout App and pay the restaurant bill through
							Dineout Pay to earn 20% Cashback (upto ₹ 250). Download the app
							here{" "}
						</p>
					</div>
				</div>
			</div>

			{openModal && <UserEditModal handleModal={toggleModal} />}
		</div>
	);
};
