import React from "react";
import { BackButton, ClickedImg, NextImageArrow, NextImage, PrevImageArrow, PrevImage, ClickedImgWrapper } from "./OneView.styled";

const OneView = ({
  altName,
  clickedImg,
  handleHideImage,
  handleShowNextImage,
  handleShowPrevImage,
}) => {
  return (
    <ClickedImgWrapper>
      <PrevImage onClick={handleShowPrevImage}>
        <PrevImageArrow> ⬅ </PrevImageArrow>
      </PrevImage>
      <NextImage onClick={handleShowNextImage}>
        <NextImageArrow> ➡ </NextImageArrow>
        <BackButton onClick={handleHideImage}> ↩ </BackButton>
      </NextImage>
      <ClickedImg src={clickedImg} alt={altName} />
    </ClickedImgWrapper>
  );
};

export default OneView;
