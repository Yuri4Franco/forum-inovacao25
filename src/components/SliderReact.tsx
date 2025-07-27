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
        <div className="timeline-capa">
          <h1>nossa trajetória</h1>
          <h2>
            Fórum de <span className="break">Inovação</span>
          </h2>
          <p>arrasta para o lado</p>
          <div className="setas-animadas">
            <span>&gt;</span>
            <span>&gt;</span>
            <span>&gt;</span>
            <span>&gt;</span>
            <span>&gt;</span>
          </div>
        </div>
        {trajetoria.map((item, index) => (
          <div key={index}>
            <TimeLineForum item={item} />
          </div>
        ))}

        {/* <div className="slider-fim"></div> */}
      </Slider>
    </div>
  );
}

export default SliderReact;
