// Third Party Imports
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// Inner Imports
import { Navbar } from "./componets/Navbar/Navbar";
// import { UserProfile } from "./componets/";
import { BookATable } from "./componets/Bookatable/BookATable";
import { SinglePrevReservDetails } from "./components/UserProfile/SinglePrevReserv";
import { setLoggedIn } from "./store/Login/actions";
import { HomePage } from "./components/HomePage/HomePage";
import Restaurant from "./components/RestPage/Restaurant";
import Footer from "./components/Footer/Footer";

// Styles Imports
import "./App.css";
import Passport from "./components/dineoutpassport/Dine";

function App() {
	const dispatch = useDispatch();

	const LOGGED_IN_USER =
		JSON.parse(localStorage.getItem("loggedinuser")) || null;

	if (LOGGED_IN_USER) {
		dispatch(setLoggedIn(LOGGED_IN_USER));
	}

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/users/:id" element={<UserProfile />}></Route>
				<Route
					path="/users/:id/confirmed-bookings/:pID"
					element={<SinglePrevReservDetails />}
				></Route>
				<Route path="/book-a-table" element={<BookATable />}></Route>
				<Route path="/restaurants" element={<Restaurant />}></Route>
				<Route path="/dineout-passport" element={<Passport />}></Route>
			</Routes>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
