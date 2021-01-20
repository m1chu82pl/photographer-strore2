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
            <div style={{'backgroundImage': `url(../../../../assets/navigation/slider1.jpg)`}}>
            </div>
          </div>
          <div className={styles.eachSlide}>
            <div style={{'backgroundImage': `url(../../../../assets/navigation/slider2.jpg)`}}>
            </div>
          </div>
          <div className={styles.eachSlide}>
            <div style={{'backgroundImage': `url(../../../../assets/navigation/slider3.jpg)`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;