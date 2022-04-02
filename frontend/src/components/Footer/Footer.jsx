// Third party imports
import React from "react";

// Inner Imports
import logo from "./Images/logo.svg";
import youtube from "./Images/Youtube.png";
import facebook from "./Images/Facebook.png";
import twitter from "./Images/Twitter.png";
import insta from "./Images/Instagram.png";
import google from "./Images/Google.png";
import { FooterStyle } from "./styled-components/FooterStyle";

export default function Footer() {
	return (
		<FooterStyle>
			<div className="container-heading-second">
				<h3 style={{ textAlign: "center", margin: 0 }}>Available in</h3>
			</div>
			<div className="footer-second-row">
				<div className="footerparent">
					<p>Delhi</p>
					<p>Pune</p>
					<p>Jaipur</p>
					<p>Vadodara</p>
				</div>
				<div className="footerparent">
					<p>Mumbai</p>
					<p>Kolkata</p>
					<p>Lucknow</p>
					<p>Nagpur</p>
				</div>
				<div className="footerparent">
					<p>Banglore</p>
					<p>Ahemdabad</p>
					<p>Indore</p>
					<p>Kochi</p>
				</div>
				<div className="footerparent">
					<p>Chennai</p>
					<p>Chandigarh</p>
					<p>Udaipur</p>
					<p>Surat</p>
				</div>
				<div className="footerparent">
					<p>Hydrabad</p>
					<p>Goa</p>
					<p>Agra</p>
					<p>Ludhiana</p>
				</div>

				{/* hello */}
			</div>
			<hr />
			<div className="footer-second-row">
				<div className="footerparent">
					<div className="container-heading-second">
						<h3>Discover</h3>
					</div>
					<p>Trending Restaurants</p>
					<p>Super Savers</p>
					<p>Dineout Pay</p>
					<p>Dineout Passport</p>
					<p>Contactless Dining</p>
					<p>Dineout Pay</p>
				</div>
				<div className="footerparent">
					<div className="container-heading-second">
						<h3>About</h3>
					</div>
					<p>About Us</p>
					<p>Blog</p>
					<p>Dineout For Business</p>
					<p>Add Restaurants</p>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
				<div className="footerparent">
					<div className="container-heading-second">
						<h3>Top Cuisines</h3>
					</div>
					<p>Chinese</p>
					<p>Italian</p>
					<p>South Indian</p>
					<p>Mexican</p>
					<p>Continental</p>
					<p>Mughlai</p>
				</div>
				<div className="footerparent">
					<div className="container-heading-second">
						<h3>Top Facilities</h3>
					</div>
					<p>Romantic</p>
					<p>Fine Dining</p>
					<p>Buffet</p>
					<p>5 Star</p>
					<p>Pure Veg</p>
					<p>Sea Food</p>
				</div>
				<div className="footerparent">
					<div className="container-heading-second">
						<h3>Top Locations</h3>
					</div>
					<p>Salt Lake</p>
					<p>Ballygunge</p>
					<p>Park Street</p>
					<p>Gariahat</p>
					<p>Behala</p>
					<p>Chandni Chowk</p>
				</div>
			</div>
			<hr />
			<div className="footer_end_div">
				<div className="footerlogodiv">
					<img src={logo} alt="" />
				</div>
				<p>Find the best Restaurants, Discounts, Deals, Offers</p>
				<p>Contact: +919306835403</p>
				<div className="sociallinks">
					<img src={youtube} alt="" />
					<img src={twitter} alt="" />
					<img src={facebook} alt="" />
					<img src={insta} alt="" />
					<img src={google} alt="" />
				</div>
				<p>2017, Dineout.co.in All Rights Reserved</p>
			</div>
		</FooterStyle>
	);
}
