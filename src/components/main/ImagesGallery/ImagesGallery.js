import React, { useState } from "react";
import { nature, portrait, documentary, architecture } from "../ImportImages";

import ManyView from "./ManyView";
import OneView from "./OneView";

const ImagesGallery = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [clickedImg, setClickedImg] = useState(null);
  const [imageIndex, setImageIndex] = useState(null)

  let actualPathName = window.location.pathname.slice(1);
  let altName = window.location.pathname.slice(1)

  switch (actualPathName) {
    case "nature":
      actualPathName = nature;
    break;
    case "portrait":
      actualPathName = portrait;
    break;
    case "documentary":
      actualPathName = documentary;
    break;
    case "architecture":
      actualPathName = architecture;
    break;
    default:
      actualPathName = "";
  }  
  
  const handleShowImage = (index) => {
    setIsHidden(!isHidden);
    setImageIndex(index);
    setClickedImg(actualPathName[index]);
  };
  
  const handleHideImage = () => {
    setIsHidden(true);
  }

  const handleShowPrevImage = () => {
    setImageIndex(imageIndex === 0 ? actualPathName.length - 1 : imageIndex - 1);
    setClickedImg(actualPathName[imageIndex]);
  }
  
  const handleShowNextImage = () => {
    setImageIndex(imageIndex  === actualPathName.length - 1 ? 0 : imageIndex + 1);
    setClickedImg(actualPathName[imageIndex]);
  }
  
  return (
    <>
      {isHidden ? (
        <ManyView actualPathName={actualPathName} showImages={handleShowImage} />
      ) : (
        <OneView altName={altName} clickedImg={clickedImg} handleHideImage={handleHideImage} handleShowNextImage={handleShowNextImage} handleShowPrevImage={handleShowPrevImage} />
      )}
    </>
  );
};

export default ImagesGallery;
