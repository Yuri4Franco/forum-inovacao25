import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderReact.css";

import Slider from "react-slick";
import { trajetoria } from "../consts/Trajetoria";
import TimeLineForum from "./TimeLineForum";

function SliderReact() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
  };

  return (
    <div className="slider-react-container">
      <Slider {...settings}>
        {trajetoria.map((item, index) => (
          <div key={index}>
            <TimeLineForum item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderReact;
