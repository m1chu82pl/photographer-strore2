import React, { useState } from "react";
import { nature, portrait, documentary, architecture } from "../ImportImages";

import ManyView from "./ManyView";
import OneView from "./OneView";

const ImagesGallery = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [clickedImg, setClickedImg] = useState(null);

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

  console.log("actualPathName: ", actualPathName);


  const handleShowImages = (index) => {
    setIsHidden(!isHidden);
    setClickedImg(actualPathName[index]);
  };

  return (
    <>
      {isHidden ? (
        <ManyView actualPathName={actualPathName} showImages={handleShowImages} />
      ) : (
        <OneView altName={altName} clickedImg={clickedImg} />
      )}
    </>
  );
};

export default ImagesGallery;
