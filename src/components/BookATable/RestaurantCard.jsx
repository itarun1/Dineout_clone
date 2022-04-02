// Third party imports
import React from "react";
import { useNavigate } from "react-router-dom";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { sendRest, delRest } from "../../store/oneRest/actions";

// Inner Components Imports
import { ratingsArray } from "./randomRatings";


// Styles Import
import "./styles/rscard.global.scss";

export const RestaurantCard = ({
  name,
  type,
  price,
  features,
  image,
  id,
  singleRest,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

	

  return (
    <div className="restaurantCard">
      <img
        onClick={() => {
          // console.log(singleRest);
          dispatch(sendRest(singleRest));
          navigate("/restaurants");
        }}
        src={image}
        alt=""
      />
      <div className="card__text">
        <h3 className="card__heading">{name}</h3>
        <p className="card__rating">
          {ratingsArray[Math.floor(Math.random() * ratingsArray.length)]}
        </p>
        <p className="card__address">Defence Colony, South Delhi</p>
        <p className="card__price-category">
          ₹ {price} | {type.join(", ")}
        </p>
      </div>
      {/* <OfferSection /> */}
    </div>
  );

};
