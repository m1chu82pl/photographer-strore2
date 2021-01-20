import React from "react";
import { Slide } from "react-slideshow-image";
import "./SliderStyles.css";
import "react-slideshow-image/dist/styles.css";
import slider1 from '../../assets/navigation/slider1.jpg';
import slider2 from '../../assets/navigation/slider2.jpg';
import slider3 from '../../assets/navigation/slider3.jpg';

const Slider = () => {
    const slideRef = React.createRef();
  
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 500,
      arrows: true,
      infinite: true,
      easing: "ease"
    };
    const slideImages = [
      slider1, slider2, slider3
    ];

    return (
      <div className="App">
        <div className="slide-container">
          <Slide ref={slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    );
}

export default Slider;
