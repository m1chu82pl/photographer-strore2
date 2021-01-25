import React from "react";

import styles from "./ImagesGallery.module.scss";

const OneView = ( {altName, clickedImg} ) => {
  return ( <div className={styles.clickedImgWrapper}>
    <img
      src={clickedImg}
      className={styles.clickedImg}
      alt={altName}
    />
  </div> );
}
 
export default OneView;