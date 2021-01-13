import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.wrapper}>
        <li className={styles.navigationPoint}>
          <NavLink exact activeClassName={styles.navigationPointNavLinkActive} className={styles.navigationPointNavLink} to="/">home</NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink activeClassName={styles.navigationPointNavLinkActive} className={styles.navigationPointNavLink} to="/nature">nature</NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink activeClassName={styles.navigationPointNavLinkActive} className={styles.navigationPointNavLink} to="/portrait">portrait</NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink activeClassName={styles.navigationPointNavLinkActive} className={styles.navigationPointNavLink} to="/documentary">documentary</NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink activeClassName={styles.navigationPointNavLinkActive} className={styles.navigationPointNavLink} to="/architecture">architecture</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
