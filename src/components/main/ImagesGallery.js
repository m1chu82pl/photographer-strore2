import React from "react";
import {
  nature,
  portrait,
  documentary,
  architecture,
} from "../../components/main/importImages";

import styles from "./ImagesGallery.module.scss";

const ImagesGallery = () => {
  return (
    <div className={styles.natureWrapper}>
      {nature.map((natImg, index) => {
        return (
          <div className={styles.natureWrapperImg} key={index}>
            <img src={natImg} className={styles.image} alt="nature" />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesGallery;
