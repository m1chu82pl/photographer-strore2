import React from "react";

import styles from "./ImagesGallery.module.scss";


const ManyView = ({ actualPathName, nature, showImages }) => {
  return ( 
    <div className={styles.natureWrapper}>
          {actualPathName.map((natImg, index) => {
            return (
              <div className={styles.natureWrapperImg} key={index}>
                <img
                  src={natImg}
                  className={styles.image}
                  onClick={() => showImages(index)}
                  alt={actualPathName}
                />
              </div>
            );
          })}
        </div>
   );
}
 
export default ManyView;