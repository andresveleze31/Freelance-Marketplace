import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategorieCard from "./CategorieCard";
import { cards } from "../data";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="contenedor py-[5rem] px-[5rem] shadow-lg rounded-3xl mt-[-10rem] bg-white  ">
      <div className="slider-container">
        <Slider {...settings}>
          {cards.map((card) => {
            return <CategorieCard item={card} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
