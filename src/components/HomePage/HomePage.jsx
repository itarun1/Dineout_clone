// Third Party Imports
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Inner Imports
import { InputText } from "../Navbar/styled-components/InputText";
import { Button } from "../Navbar/styled-components/Button";
import { applySearch, getRestaurants } from "../../store/Restaurants/actions";
import { RestaurantCard } from "../BookATable/RestaurantCard";
import Footer from "../Footer/Footer";

// Styles Imports
import "./styles/home.global.scss";
import Card from "../cards/card";

export const HomePage = () => {
	const buttonRef = useRef();
	const inputRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { restaurants } = useSelector((store) => store.otherReducer);

	useEffect(() => {
		getRestData();
	}, []);

	const getRestData = () => {
		dispatch(getRestaurants());
	};

	return (
		<>
		<div className="home_page">
			<div className="image_search_section">
				<h1>
					It's now safe to <span>Crave!</span>
				</h1>
				<span className="inputSpan">
					<i className="material-icons">search</i>
					<InputText
						wd="100%"
						pd="10px 14px"
						fntsize="18px"
						onKeyPress={(e) =>
							e.key === "Enter" ? buttonRef.current.click() : null
						}
						ref={inputRef}
						type="search"
						placeholder="Search for Restraunts, Offers, Deals or Events..."
					/>
					<Button
						ref={buttonRef}
						onClick={() => {
							navigate("/book-a-table");
							dispatch(applySearch(inputRef.current.value));
						}}
					>
						Search
					</Button>
				</span>
			</div>
			{/* <Card /> */}
			<div className="featured_restaurants">
				<h2>Featured Restaurants</h2>
				<div className="mapped_restaurants">
					{restaurants.slice(-4).map((oneRest) => {
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
		</div>
		<Footer/>
		</>
	);
};
