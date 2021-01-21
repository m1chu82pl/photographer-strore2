import React, { useState } from "react";
import { IconContext } from "react-icons";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import styles from "./Slider.module.scss";
// import './Slider.css';

import slider1 from "../../assets/navigation/slider1.jpg";
import slider2 from "../../assets/navigation/slider2.jpg";
import slider3 from "../../assets/navigation/slider3.jpg";

// const slideRef = React.createRef();

const imagesArray = [slider1, slider2, slider3];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = imagesArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imagesArray) || length <= 0) {
    return null;
  }

  return (
    <IconContext.Provider value={{ className: `${styles.reactIcons}` }}>
      <section className={styles.slider}>
        <IoIosArrowDropleftCircle
          className={styles.leftArrow}
          onClick={prevSlide}
        />
        <IoIosArrowDroprightCircle
          className={styles.rightArrow}
          onClick={nextSlide}
        />
        {imagesArray.map((slide, index) => {
          return (
            <div
              className={
                index === current ? `${styles.slideActive}` : `${styles.slide}`
              }
              key={index}
            >
              {index === current && (
                <img src={slide} alt="travel" className={styles.image} />
              )}
            </div>
          );
        })}
      </section>
    </IconContext.Provider>
  );
};

export default ImageSlider;
