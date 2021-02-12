import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  padding: 5px 0;
  background-color: #d4d4d4;
`;

const Version = styled.h6`
  position: absolute;
  left: 2px;
  bottom: 2px;
`;

const Footer = () => {
  const initialDate = new Date();
  const year = initialDate.getFullYear();

  return (
    <Wrapper>
      <h6>© 2020 - {year} MONKEY FINGER // CREATIVE DIRECTOR-DEVELOPER</h6>
      <h6>All Rights Reserved ™</h6>
      <Version>🆚 ➡ {process.env.REACT_APP_VERSION}</Version>
    </Wrapper>
  );
};

export default Footer;
