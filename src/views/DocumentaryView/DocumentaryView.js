import React from "react";
import Navigation from "../../components/main/Navigation/Navigation";
import ImagesGallery from "../../components/main/ImagesGallery/ImagesGallery";

import Views from "../Views.styled.js";

const DocumentaryView = () => {
  return (
    <Views>
      <Navigation />
      <ImagesGallery />
    </Views>
  );
};

export default DocumentaryView;
