import React from "react";
import { Slide } from 'react-slideshow-image';
import styles from "./Slider.module.scss";


const slideImages = [
  'src/assets/navigation/slider1',
  'src/assets/navigation/slider2',
  'src/assets/navigation/slider3'
];

const Slideshow = () => {
    return (
      <div className={styles.slideContainer}>
        <Slide>
          <div className={styles.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className={styles.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className={styles.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;