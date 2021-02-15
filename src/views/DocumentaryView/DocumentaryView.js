import React from "react";
import Navigation from "../../components/main/Navigation/Navigation";
import ImagesGallery from "../../components/main/ImagesGallery/ImagesGallery";

import styles from '../Views.module.scss';

const DocumentaryView = () => {
  return (
    <div className={styles.views}>
    <Navigation />
    <ImagesGallery/>
    </div>
  );
};

export default DocumentaryView;
