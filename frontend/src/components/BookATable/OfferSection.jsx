// Third Party Imports
import { Button } from "./styled-components/Button";

// Styles Imports
import "./styles/offersection.scss";

export const OfferSection = () => {
	return (
		<div className="offer-section">
			<img
				className="offer_token_image"
				src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/21/free_offer.png"
				alt="Percent Off Image"
			/>
			<p className="offer_percent">10% off on Food and Soft Beverages Bill</p>
			<Button fs="12px">Avail Now</Button>
		</div>
	);
};
