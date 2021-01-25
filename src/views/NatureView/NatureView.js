import React from "react";
import Navigation from "../../components/main/Navigation";
import ImagesGallery from "../../components/main/ImagesGallery/ImagesGallery";

import styles from '../Views.module.scss'



const NatureView = () => {
  return (
    <div className={styles.views}>
    <Navigation />
    <ImagesGallery/>
    </div>
  );
};

export default NatureView;
