import React from "react";

import styles from "./ImagesGallery.module.scss";

const OneView = ({ altName, clickedImg }) => {
  return (
    <div className={styles.clickedImgWrapper}>
      <div className={styles.prevImage}>
        <div className={styles.prevImageArrow}> ⬅  </div>
      </div>
      <div className={styles.nextImage}>
        <div className={styles.nextImageArrow}> ➡  </div>
      </div>
      <img src={clickedImg} className={styles.clickedImg} alt={altName} />
    </div>
  );
};

export default OneView;
