import React, { useState } from "react";
import {
  nature,
  portrait,
  documentary,
  architecture,
} from "../../components/main/importImages";

import styles from "./ImagesGallery.module.scss";

const ImagesGallery = () => {
  const [isHidden, setIsHidden] = useState(true)

  const handleShowImages = () => {
    setIsHidden(!isHidden);
  }
  
console.log(isHidden);
  return (
<>
    {isHidden ? (
    <div className={styles.natureWrapper}>
      {nature.map((natImg, index) => {
        return (
          <div className={styles.natureWrapperImg} key={index}>
            <img src={natImg} className={styles.image} onClick={handleShowImages} alt="nature" />
          </div>
        );
      })}
    </div>
    ) : (<div>aaa</div>)}
    </>
  );
};

export default ImagesGallery;
