import React from "react";
import "./Dine.css";
import Cara from "./Cara";
import Slider from "./Slider";
import { Button } from "@material-ui/core";
import Footer from "../Footer/Footer";

function Passport() {
	return (
		<>
		<div className="passportCont">
			<div className="gif">
				<img
					src="https://im1.dineout.co.in/images/uploads/misc/2022/Jan/19/gifdpbuy.gif"
					alt="gif_image"
				/>
			</div>

			<div className="caraousel">
				<center>
					<h2>Member Privileges</h2>
					<p>offers you can’t resist</p>
				</center>
				<Slider />
			</div>

			<div className="dineLogo">
				<img
					src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/21/dp_experiences_title.png"
					alt="logo"
				/>
			</div>

			<div className="caraousel2">
				<center>
					<h2>How To Use Dineout Passport</h2>
				</center>
				<Cara />
			</div>
			{/* <div className="fixed_btn">
        <Button variant="outlined">
          <div>
            <h3>Browse Plans starting at Rs 399</h3>
          </div>
        </Button>
      </div> */}
		</div>
	  <Footer/>
		</>
	);
}

export default Passport;
