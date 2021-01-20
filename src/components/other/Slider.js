import React from "react";
import styles from "./Slider.module.scss";
import slider1 from "../../assets/navigation/slider1.jpg";
import slider2 from "../../assets/navigation/slider2.jpg";
import slider3 from "../../assets/navigation/slider3.jpg";

const Slider = () => {
  // const slideRef = React.createRef();

  return (
    <div className={styles.eachSlide}>
      <img src={slider1} alt="sample" />
    </div>
  );
};

export default Slider;
