import React from "react";

import styles from "./ImagesGallery.module.scss";

const OneView = ( {actualPathName, clickedImg} ) => {
  return ( <div className={styles.clickedImgWrapper}>
    <img
      src={clickedImg}
      className={styles.clickedImg}
      alt={actualPathName}
    />
  </div> );
}
 
export default OneView;