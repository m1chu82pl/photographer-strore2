import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import styles from "./Slider.module.scss";
import './Slider.css';



import slider1 from "../../assets/navigation/slider1.jpg";
import slider2 from "../../assets/navigation/slider2.jpg";
import slider3 from "../../assets/navigation/slider3.jpg";

  // const slideRef = React.createRef();

  const imagesArray = [slider1, slider2, slider3]

  const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = imagesArray.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(imagesArray) || imagesArray.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {imagesArray.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide} alt='travel' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };
  
  export default ImageSlider;