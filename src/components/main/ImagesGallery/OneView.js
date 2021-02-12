import React from "react";
import styled, { keyframes } from "styled-components";

const ClickedImgWrapper = styled.div`
  position: fixed;
  top: calc(50% + 25px);
  left: 50%;
  width: 100%;
  height: 90vh;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickedImg = styled.img`
  width: 80vw;
  height: 90vh;
  object-fit: contain;
`;

const PrevImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(95, 158, 160, 0);

  &:hover {
    cursor: pointer;
  }
`;

const arrowsAppear = keyframes`
  0% {
      color: rgba(124, 124, 124, 0);
    }
    10% {
      color: rgb(168, 158, 18);
    }
    90% {
      color: rgb(124, 124, 124);
    }
    100% {
      color: rgba(124, 124, 124, 0);
    }
`;

const PrevImageArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10vw;
  font-size: 2rem;
  color: rgba(124, 124, 124, 0);
  z-index: 1;
  cursor: pointer;
  user-select: none;
  animation: ${arrowsAppear} 9s;
`;

const NextImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(95, 158, 160, 0);

  &:hover {
    cursor: pointer;
  }
`;

const NextImageArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10vw;
  font-size: 2rem;
  color: rgba(124, 124, 124, 0);
  z-index: 1;
  cursor: pointer;
  user-select: none;
  animation: ${arrowsAppear} 9s 1s;
`;

const backButtonAppear = keyframes`
    0% {
      color: rgba(168, 158, 18, 0);
      border: 2px rgba(124, 124, 124, 0) dotted;
    }
    30% {
      color: rgba(168, 158, 18, 0);
      border: 2px rgba(124, 124, 124, 0) dotted;
    }
    45% {
      color: rgb(168, 158, 18);
      border: 2px rgba(124, 124, 124, 0) dotted;
    }
    90% {
      color: rgb(124, 124, 124);
      border: 2px rgb(124, 124, 124) dotted;
    }
    100% {
      color: rgba(124, 124, 124, 0.5);
      border: 2px rgba(124, 124, 124, 0.5) dotted;
    }
`;

const BackButton = styled.div`
  position: absolute;
  top: 90%;
  right: 10vw;
  padding: 15px 20px;
  font-size: 2rem;
  color: rgba(124, 124, 124, 0.5);
  border: 2px rgba(124, 124, 124, 0.5) dotted;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  animation: ${backButtonAppear} 9s;
`;

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
