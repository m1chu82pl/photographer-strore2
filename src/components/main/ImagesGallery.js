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
  const [clickedImg, setClickedImg] = useState(null);

  const actualPathName = window.location.pathname.slice(1);

  const handleShowImages = (index) => {
    setIsHidden(!isHidden);
    setClickedImg(nature[index]);
  };

  return (
    <>
      {isHidden ? (
        <div className={styles.natureWrapper}>
          {nature.map((natImg, index) => {
            return (
              <div className={styles.natureWrapperImg} key={index}>
                <img
                  src={natImg}
                  className={styles.image}
                  onClick={() => handleShowImages(index)}
                  alt={actualPathName}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.clickedImgWrapper}>
          <img
            src={clickedImg}
            className={styles.clickedImg}
            alt={window.location.pathname.slice(1)}
          />
        </div>
      )}
    </>
  );
};

export default ImagesGallery;
