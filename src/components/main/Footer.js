import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const initialDate = new Date();
  const year = initialDate.getFullYear();
  
    console.log("environment from .env file: ", process.env);
  return (
    <footer className={styles.footer}>
      <h6>© 2020 - {year} MONKEY FINGER // CREATIVE DIRECTOR-DEVELOPER</h6>
      <h6>All Rights Reserved ™</h6>
      <h6 className={styles.version}>🆚 </h6>
    </footer>
  );
};

export default Footer;
