import React, { useState } from "react";
import { nature, portrait, documentary, architecture } from "../ImportImages";

import ManyView from "./ManyView";
import OneView from "./OneView";

const ImagesGallery = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [clickedImg, setClickedImg] = useState(null);

  const actualPathName = window.location.pathname.slice(1);

  const handleShowImages = (index) => {
    setIsHidden(!isHidden);
    setClickedImg(nature[index]);
  };

  return (
    <>
      {isHidden ? (
        <ManyView nature={nature} showImages={handleShowImages} />
      ) : (
        <OneView actualPathName={actualPathName} clickedImg={clickedImg} />
      )}
    </>
  );
};

export default ImagesGallery;
