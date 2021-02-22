import React from 'react';


import Slider from "../../components/other/Slider";
import Section from '../../components/main/Section';
import Navigation from '../../components/main/Navigation/Navigation';
import Footer from '../../components/main/Footer/Footer';

const HomeView = () => {
  return ( 
    <>
    <Slider />
    <Navigation/>
    <Section/>
    <Footer/>
    </>
   );
}
 
export default HomeView;
