import React from "react";
import Navigation from "../../components/main/Navigation/Navigation";
import ImagesGallery from "../../components/main/ImagesGallery/ImagesGallery";
import Footer from '../../components/main/Footer/Footer';

import Views from "../Views.styled.js";

const PortraitView = () => {
  return (
    <Views>
      <Navigation />
      <ImagesGallery />
      <Footer/>
    </Views>
  );
};

export default PortraitView;
