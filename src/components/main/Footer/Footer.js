import React from "react";
import { Wrapper, Version } from "./Footer.styled";

const Footer = () => {
  const initialDate = new Date();
  const year = initialDate.getFullYear();

  return (
    <Wrapper>
      <h6>© 2020 - {year} MONKEY FINGER // CREATIVE DIRECTOR-DEVELOPER</h6>
      <h6>All Rights Reserved ™</h6>
      <Version>
        <h6>🆚 ➡ {process.env.REACT_APP_VERSION}</h6>
      </Version>
    </Wrapper>
  );
};

export default Footer;
