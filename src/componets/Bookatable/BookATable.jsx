import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRestaurants } from "../../store/Restaurants/actions";
import { FilterSection } from "./FilterSection";
import { RestaurantCard } from "./RestaurantCard";
import Footer from "../Footer/Footer";

// Styles Imports
import "./styles/bookatable.scss";
export const BookATable = () => {
	const { restaurants } = useSelector((store) => store.otherReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		getRestData();
	}, []);

	const getRestData = () => {
		dispatch(getRestaurants());
	};

	return (
		<>
			<h1 className="best__restaurants">Best Restaurants Near You</h1>
			<div className="mapped__restaurants">
				<div className="left">
					<FilterSection />
				</div>
				<div className="right">
					{restaurants.map((oneRest) => {
						const { name, _id, price, type, image_urls } = oneRest;
						return (
							<RestaurantCard
								name={name}
								type={type}
								id={_id}
								price={price}
								key={_id}
								image={image_urls[0]}
								singleRest={oneRest}
							/>
						);
					})}
				</div>
			</div>
			<Footer/>
		</>
	);
};
