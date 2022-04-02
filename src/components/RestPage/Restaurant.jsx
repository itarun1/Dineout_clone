import { useEffect, useState, useRef } from "react";
import "./styles/restPage.scss";
import { useSelector } from "react-redux";
import Slideshow from "./SlideImg";
import axios from "axios";
import { OfferOrDeal } from "../SingleRestaurant/OfferOrDeal";
// import Footer from "../Footer/Footer";

function Restaurant() {
	const { oneRest } = useSelector((store) => store.oneRestReducer);
	const [data, Setdata] = useState([]);
	const [type, Settype] = useState([]);
	const [bestItems, SetbestItems] = useState([]);
	const [features, Setfeatures] = useState([]);
	const [imgs, Setimgs] = useState([]);
	const [focus, Setfocus] = useState(false);
	const aboutRef = useRef();
	const menuRef = useRef();
	const helpRef = useRef();
	const suggestRef = useRef();

	const restType = [
		"Cafe",
		"5 Star, Casual Dining",
		"Lounge",
		"Casual Dining, Nightlife, Bar",
	];

	const menuItems = [
		"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/m/q/m49654-164423952062011aa021f75.jpg?tr=tr:n-xlarge",
		"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/y/j/m25868-164257258161e7ab2533ecb.jpg?tr=tr:n-xlarge",
		"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/v/r/m48242-163375806161612b6d44748.jpg?tr=tr:n-xlarge",
	];

	useEffect(() => {
		axios
			.get(
				`https://dineout-server.herokuapp.com/restaurants/${oneRest._id}`
			)
			.then((res) => {
				Setdata(res.data);
				Settype(res.data.type);
				Setfeatures(res.data.features);
				SetbestItems(res.data.bestItems);
				Setimgs(res.data.image_urls);
			});
	}, []);

	return (
		<>
			<div className="restCont">
				<div className="leftRest">
					<div className="slideCont">
						<div className="slideDiv">
							<Slideshow imgs={imgs} />
						</div>
						<div className="titleDiv">
							<div className="leftTitle">
								<h2>{data.name}</h2>
								<div className="">
									<a className="priceA">₹{data.price} | </a>
									{type.map((e, i) => {
										return <a key={i}>{e},</a>;
									})}
								</div>
								<div className="direcDiv">
									<a>
										Kankurgacchi | Kolkata |{" "}
										<span>
											{" "}
											<img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/path.png"></img>{" "}
											Get Direction
										</span>
									</a>
								</div>
								<div className="direcDiv">
									<a>
										Time: <span>(Opens at 11:00 AM)</span>
									</a>
								</div>
							</div>
							<div className="rightTitle">
								<div className="ratingDiv"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="rightRest">
					<OfferOrDeal />
				</div>
				<div className="optionDiv" id="optionDiv">
					<div
						tabIndex="-1"
						className={focus ? "overFocused" : "overNotFocused"}
					>
						Overview
					</div>
					<div
						tabIndex="-1"
						onFocus={() => {
							Setfocus(true);
						}}
						onClick={() => {
							menuRef.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Menu
					</div>
					<div
						tabIndex="-1"
						onClick={() => {
							aboutRef.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						About
					</div>
					<div
						tabIndex="-1"
						onClick={() => {
							suggestRef.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Suggestions
					</div>
					<div
						tabIndex="-1"
						onClick={() => {
							helpRef.current.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Help
					</div>
				</div>
				<div className="dinOffers">
					<div>
						<img
							src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium"
							alt=""
						/>
					</div>
					<div>
						<p>
							Combine any offer with Dineout Pay to <b>save up to 10% </b> more
							on your bill and also get <b>20%</b> cashback.
						</p>
					</div>
				</div>
				<div ref={menuRef} className="imgView">
					<h3>Menu</h3>
					<div>
						<img src={menuItems[Math.floor(Math.random() * 3)]} alt="" />
					</div>
				</div>
				<div ref={aboutRef} className="overView">
					<div className="aboutDiv">
						<h3>About</h3>
						<p>{data.about}</p>
					</div>
					<div className="aboutLogo">
						<div>
							<img
								src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_30.png"
								alt=""
							/>
						</div>
						<div>
							<h4>CUISINE</h4>
							<p>
								{type.map((e, i) => {
									return <a key={i}>{e},</a>;
								})}
							</p>
						</div>
					</div>
					<div className="aboutLogo">
						<div>
							<img
								src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png"
								alt=""
							/>
						</div>
						<div>
							<h4>TYPE</h4>
							<p>{restType[Math.floor(Math.random() * 4)]}</p>
						</div>
					</div>
					<div className="aboutLogo">
						<div>
							<img
								src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png"
								alt=""
							/>
						</div>
						<div>
							<h4>BESTSELLING ITEMS</h4>
							<p>
								{bestItems.map((e, i) => {
									return <a key={i}>{e},</a>;
								})}
							</p>
						</div>
					</div>
					<div className="aboutLogo">
						<div>
							<img
								src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_3.png"
								alt=""
							/>
						</div>
						<div>
							<h4>AVERAGE COST</h4>
							<p>₹ {data.price}</p>
						</div>
					</div>
					<div className="lastLogo">
						<div>
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png"
									alt=""
								/>
							</div>
							<div>
								<h4>FACILITIES AND FEATURES</h4>
							</div>
						</div>
						<div className="featureDiv">
							<div className="featureLogo">
								<div>
									<img
										src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/7.png"
										alt=""
									/>
								</div>
								<div>
									<p>Air Conditioned</p>
								</div>
							</div>
							<div className="featureLogo">
								<div>
									<img
										src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/8.png"
										alt=""
									/>
								</div>
								<div>
									<p>Wifi Avaliable</p>
								</div>
							</div>
							<div className="featureLogo">
								<div>
									<img
										src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/11.png"
										alt=""
									/>
								</div>
								<div>
									<p>Parking</p>
								</div>
							</div>
							<div className="featureLogo">
								<div>
									<img
										src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/13.png"
										alt=""
									/>
								</div>
								<div>
									<p>Card Accepted</p>
								</div>
							</div>
							<div className="featureLogo">
								<div>
									<img
										src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/2.png"
										alt=""
									/>
								</div>
								<div>
									<p>Wallet Accepted</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div ref={suggestRef} className="likedRestDiv">
					<div>
						<h3>You May Also Like</h3>
						<p>Checkout these great restaurants</p>
					</div>
					<div className="restCardDiv">
						<div className="restCard">
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/g/v/p40797-164363433561f7de9f52549.jpg?tr=tr:n-medium"
									alt=""
								/>
							</div>
							<div className="creamDiv">
								<div>
									<h4>K local</h4>
									<p>Salt Lake,East Kolkata</p>
									<h5>2 offers available</h5>
								</div>
								<div>
									<b>4</b>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
						<div className="restCard">
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/t/p26492-15745164235dd936c7eda5d.jpg?tr=tr:n-medium"
									alt=""
								/>
							</div>
							<div className="creamDiv">
								<div>
									<h4>Pour House</h4>
									<p>Salt Lake,East Kolkata</p>
									<h5>2 offers available</h5>
								</div>
								<div>
									<b>4</b>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
						<div className="restCard">
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/t/e/p38617-15163646915a61e3931f64a.jpg?tr=tr:n-medium"
									alt=""
								/>
							</div>
							<div className="creamDiv">
								<div>
									<h4>Plush 28</h4>
									<p>Salt Lake,East Kolkata</p>
									<h5>2 offers available</h5>
								</div>
								<div>
									<b>4</b>
									<i className="fa fa-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="infoDiv">
					<div>
						<div>
							<h3>Missing some information?</h3>
						</div>
						<div>
							<h3>Add now</h3>
						</div>
					</div>
				</div>
				<div ref={helpRef} className="helpDiv">
					<h3>We're always here to help</h3>
					<div className="helpWrapper">
						<div className="helpLogoDiv">
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
									alt=""
								/>
							</div>
							<div>
								<h4>Call Us</h4>
								<p>+91 9212340202</p>
							</div>
						</div>

						<div className="helpLogoDiv">
							<div>
								<img
									src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
									alt=""
								/>
							</div>
							<div>
								<h4>Call the restaurants</h4>
								<p>06536295632</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fssaiDiv">
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2019/Aug/7/fssai_logo_3x.png"
						alt=""
					/>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Restaurant;
