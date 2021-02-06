import React from "react";
import styles from "./ImagesGallery.module.scss";

const ManyView = ({ actualPathName, altName, showImages }) => {
  return ( 
    <div className={styles.wrapper}>
          {actualPathName.map((imageSrc, index) => {
            return (
              <div className={styles.wrapperImg} key={index}>
                <img
                  src={imageSrc}
                  className={styles.image}
                  onClick={() => showImages(index)}
                  alt={altName}
                />
              </div>
            );
          })}
        </div>
   );
}
 
export default ManyView;
