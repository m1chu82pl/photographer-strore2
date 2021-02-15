import React from "react";
import { Image, Wrapper, WrapperImg } from './ManyViews.styled';



const ManyView = ({ actualPathName, altName, showImages }) => {
  return (
    <Wrapper>
      {actualPathName.map((imageSrc, index) => {
        return (
          <WrapperImg key={index}>
            <Image
              src={imageSrc}
              onClick={() => showImages(index)}
              alt={altName}
            />
          </WrapperImg>
        );
      })}
    </Wrapper>
  );
};

export default ManyView;
