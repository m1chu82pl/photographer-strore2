import React, { useState } from "react";
import {
  nature,
  portrait,
  documentary,
  architecture,
} from "../../components/main/importImages";

import styles from "./ImagesGallery.module.scss";

const ImagesGallery = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [clickedImg, setClickedImg] = useState(null)

  const handleShowImages = (index) => {
    setIsHidden(!isHidden);
    // console.log(index);
    setClickedImg(nature[index]);
  }
  
  // console.log(isHidden);
  // console.log("clickedImg ", typeof(clickedImg));
  return (
<>
    {isHidden ? (
    <div className={styles.natureWrapper}>
      {nature.map((natImg, index) => {
        return (
          <div className={styles.natureWrapperImg} key={index}>
            <img src={natImg} className={styles.image} onClick={() => handleShowImages(index)} alt="nature" />
          </div>
        );
      })}
    </div>
    ) : (<div className={styles.clickedImgWrapper}><img src={clickedImg} alt=""/></div>)}
    </>
  );
};

export default ImagesGallery;
