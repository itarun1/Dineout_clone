import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({ imgs }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div
        style={{
          width: "50px",
          height: "100px",
          borderRadius: "50%",
          borderRadius: "0px 50px 50px 00px",
          marginRight: "-50px",
          opacity: ".7",
          backgroundColor: "black",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{
            display: "block",
            // margin: "25",
            marginTop: "39",
            // marginRight: "20",
            marginLeft:"5",
            width: "25px",
            opacity: "1",
          }}
          stroke="#FFFFFF"
          strokeWidth="2"
          
        >
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{
          width: "50px",
          height: "100px",
          borderRadius: "50px 0px 0px 50px",
          marginLeft: "-50px",
          backgroundColor: "black",
          opacity: ".7",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{
            display: "block",
            margin: "20",
            marginTop: "37",
            width: "25px",
            opacity: "1",
          }}
          stroke="#FFFFFF"
          strokeWidth="2"
        >
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </div>
    ),
  };

  return (
    <div className="slide-container">
      <Slide {...properties} autoplay={true} transitionDuration={200}>
        {imgs.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${imgs[index]})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
