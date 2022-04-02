import { useEffect, useRef, useState } from "react";
import Calender from "react-calendar";
import { useNavigate } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";

// Inner Imports
import { lunchTimings, dinnerTimings } from "./timings";
import { TimeButtons } from "./TimeButtons";
import { updateUser } from "../../store/Login/actions";

// Styles Imports
import "./customCalender.scss";

export const OfferOrDeal = () => {
	const { oneRest } = useSelector((store) => store.oneRestReducer);
	const { isLoggedIn, loggedInUser } = useSelector(
		(store) => store.loginReducer
	);
	const [value, onChange] = useState(new Date());
	const [pDate, setPDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(null);
	const [mealSelector, setMealSelector] = useState("lunch");
	const [guestCounter, setGuestCounter] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Guest name is mobile ref
	const guestNameRef = useRef();
	const guestMobileRef = useRef();

	const handleMealSelector = (value) => {
		setMealSelector(value);
	};

	const timeSelector = (value) => {
		setSelectedTime(value);
	};

	const handleGuestsCount = (value) => {
		setGuestCounter(value);
		if (guestCounter < 0) setGuestCounter(0);
	};

	useEffect(() => {
		console.log(pDate);
	}, [value, pDate]);

	return (
		<div className="mainDiv">
			<h3 className="select__offer">Select an offer or deal</h3>

			<Calender
				onChange={onChange}
				value={value}
				defaultView="month"
				maxDetail="month"
			/>

			{!selectedTime ? (
				<div className="time__slots">
					<span className="lunch__dinner-selector">
						<button
							className={mealSelector === "lunch" ? "selected" : ""}
							onClick={() => handleMealSelector("lunch")}
						>
							Lunch
						</button>
						<button
							className={mealSelector === "dinner" ? "selected" : ""}
							onClick={() => handleMealSelector("dinner")}
						>
							Dinner
						</button>
					</span>

					{mealSelector === "lunch" ? (
						<TimeButtons array={lunchTimings} timeHandler={timeSelector} />
					) : mealSelector === "dinner" ? (
						<TimeButtons array={dinnerTimings} timeHandler={timeSelector} />
					) : (
						""
					)}
				</div>
			) : (
				<div className="selectTimeAgain">
					<p> {selectedTime} PM</p>
					<button onClick={() => timeSelector(null)}>Select Time</button>
				</div>
			)}

			<div className="guests__selector">
				<p>Guests</p>
				<span className="guest__counter">
					<i
						onClick={() => {
							handleGuestsCount(guestCounter - 1);
							if (guestCounter === 1) {
								guestNameRef.current.defaultValue = "";
								guestMobileRef.current.defaultValue = "";
							}
						}}
						className="material-icons"
					>
						remove_circle_outline
					</i>
					<p>{guestCounter}</p>
					<i
						onClick={() => {
							if (isLoggedIn) {
								guestNameRef.current.defaultValue = loggedInUser.name;
								guestMobileRef.current.defaultValue = loggedInUser.mobile;
							}
							handleGuestsCount(guestCounter + 1);
						}}
						className="material-icons"
					>
						add_circle_outline
					</i>
				</span>
				<div className="guest__details">
					<p className="guest__details-heading">Enter Guests Details</p>
					<input ref={guestNameRef} type="text" placeholder="Guest Name" />
					<input ref={guestMobileRef} type="text" placeholder="Mobile Number" />
					{guestCounter >= 1 && (
						<button
							style={{
								margin: "5px",
								width: "280px",
								height: "30px",
								color: "white",
								fontWeight: "bold",
								borderRadius: "10px",
								border: "0",
								backgroundColor: "#FF645A",
							}}
							onClick={() => {
								if (!isLoggedIn) {
									alert("Please login in first");
									return;
								}
								const payload = {
									name: loggedInUser.name,
									mobile: loggedInUser.mobile,
									email: loggedInUser.email,
									id: loggedInUser.id,
									prevReservations: [
										...loggedInUser.prevReservations,
										{
											...oneRest,
											event_date: value,
											event_time: selectedTime,
											numGuests: guestCounter,
											guestName: guestNameRef.current.value,
											guestNumber: guestMobileRef.current.value,
										},
									],
								};
								dispatch(updateUser(payload));
								alert("Booking Successful");
								navigate("/");
							}}
						>
							Continue
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
