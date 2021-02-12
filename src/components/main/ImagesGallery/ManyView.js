import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  padding-bottom: 50px;
  background: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 10px;
`;

const WrapperImg = styled.div`
  background: rgb(82, 82, 82);
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 7px 0px rgb(82, 82, 82);
  transition: 0.4s ease-out;

  &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 13px 0px rgb(95, 95, 95);
      }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  cursor: pointer;  
`;

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
