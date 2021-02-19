import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  DropLeftCircle,
  DropRightCircle,
  SlideActive,
  Image,
} from "./Slider.styled";

import slider1 from "../../assets/navigation/slider1.jpg";
import slider2 from "../../assets/navigation/slider2.jpg";
import slider3 from "../../assets/navigation/slider3.jpg";

const imagesArray = [slider1, slider2, slider3];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = imagesArray.length;

  useInterval(() => {
    nextSlide();
  }, 5000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imagesArray) || length <= 0) {
    return null;
  }

  function useInterval(callback, delay) {
    const savedCallbackFunc = useRef();

    useEffect(() => {
      savedCallbackFunc.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallbackFunc.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <Wrapper>
      <DropLeftCircle onClick={prevSlide} />
      <DropRightCircle onClick={nextSlide} />
      {imagesArray.map(
        (slide, index) =>
          index === current && (
            <SlideActive key={index}>
              <Image src={slide} alt="travel" />
            </SlideActive>
          )
      )}
    </Wrapper>
  );
};

export default Slider;
