// Styles Imports
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Inner Imports
import { applyCuisine, applyFilters } from "../../store/Restaurants/actions";
import "./styles/filters.scss";

export const FilterSection = () => {
	const [cuisines, setCuisines] = useState(true);
	const [features, setFeatures] = useState(false);

	// filter States
	const [wifi, setWIFI] = useState(false);
	const [ca, setCA] = useState(false);
	const [wa, setWA] = useState(false);
	const [ac, setAC] = useState(false);

	// Cuisine States

	const dispatch = useDispatch();

	// Handler/Helper functions
	const toggleCuisines = () => {
		setCuisines(!cuisines);
	};

	const toggleFeatures = () => {
		setFeatures(!features);
	};

	const handleFilters = () => {
		const payload = {
			wifi_service: wifi,
			cards_accepted: ca,
			wallet_accepted: wa,
			air_conditioned: ac,
		};
		dispatch(applyFilters(payload));
	};

	const handleCuisine = (value) => {
		dispatch(applyCuisine(value));
	};

	useEffect(() => {
		handleFilters();
	}, [wifi, ca, wa, ac]);

	return (
		<div className="filters__section">
			<h2>Quick Filters</h2>
			<h3>
				Cuisines{" "}
				<i onClick={() => toggleCuisines()} className="material-icons">
					{cuisines ? "remove" : "add"}
				</i>
			</h3>
			{cuisines && (
				<div className="cuisines">
					<p onClick={() => handleCuisine("North Indian")}>North Indian</p>
					<p onClick={() => handleCuisine("Fast Food")}>Fast Food</p>
					<p onClick={() => handleCuisine("Chinese")}>Chinese</p>
					<p onClick={() => handleCuisine("Italian")}>Italian</p>
					<p onClick={() => handleCuisine("Continental")}>Continental</p>
				</div>
			)}
			<h3>
				Features{" "}
				<i onClick={() => toggleFeatures()} className="material-icons">
					{features ? "remove" : "add"}
				</i>
			</h3>
			{features && (
				<div className="features">
					<span className="wifi">
						<input onClick={() => setWIFI(!wifi)} type="checkbox" name="wifi" />
						<p>Wifi Service</p>
					</span>

					<span className="cards__accepted">
						<input
							onClick={() => setCA(!ca)}
							type="checkbox"
							name="cards__accepted"
						/>
						<p>Cards Accepted</p>
					</span>

					<span className="wallet__accepted">
						<input
							onClick={() => setWA(!wa)}
							type="checkbox"
							name="wallet__accepted"
						/>
						<p>Wallet Accepted</p>
					</span>

					<span className="air__conditioned">
						<input
							onClick={() => setAC(!ac)}
							type="checkbox"
							name="air__conditioned"
						/>
						<p>Air Conditioned</p>
					</span>
				</div>
			)}
		</div>
	);
};
