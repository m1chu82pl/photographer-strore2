import React from "react";
import {
  nature,
  portrait,
  documentary,
  architecture,
} from "../../components/main/importImages";

import styles from "./ImagesGallery.module.scss";

const ImagesGallery = () => {

  console.log([...nature]);
  return (
    <>
      <div className={styles.natureWrapper}>
        {nature.map((natImg, index) => {
          console.log(natImg);
          return (
            <div className={styles.natureWrapperImg}>
              <img className={styles.image} src={natImg[index]} alt="aaa" key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesGallery;
