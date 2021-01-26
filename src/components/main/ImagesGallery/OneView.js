import React from "react";

import styles from "./ImagesGallery.module.scss";

const OneView = ({ altName, clickedImg, handleHideImage, handleShowNextImage, handleShowPrevImage }) => {
  return (
    <div className={styles.clickedImgWrapper}>
      <div className={styles.prevImage} onClick={handleShowPrevImage}>
        <div className={styles.prevImageArrow} > ⬅ </div>
      </div>
      <div className={styles.nextImage} onClick={handleShowNextImage}>
        <div className={styles.nextImageArrow}> ➡ </div>
        <div className={styles.backButton} onClick={handleHideImage}> ↩ </div>
      </div>
      <img src={clickedImg} className={styles.clickedImg} alt={altName} />
    </div>
  );
};

export default OneView;
