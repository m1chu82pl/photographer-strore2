import styled, { keyframes } from "styled-components";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const DropLeftCircle = styled(IoIosArrowDropleftCircle)`
  position: absolute;
  top: 50%;
  left: 2vw;
  font-size: 3rem;
  color: rgba(186, 178, 175, 0.8);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const DropRightCircle = styled(IoIosArrowDroprightCircle)`
  position: absolute;
  top: 50%;
  right: 2vw;
  font-size: 3rem;
  color: rgba(186, 178, 175, 0.8);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const animateSlideActive = keyframes`
  0% { opacity: 0; transform: scale(1) translateX(0); }
  80% { opacity: 1; }
  100% { transform: scale(1.06) translateX(60px); }
`;

export const SlideActive = styled.div`
  opacity: 1;
  transform: scale(1.06) translateX(60px);
  animation: ${animateSlideActive} 2s;
`;

export const Image = styled.img`
  object-fit: fill;
`;
