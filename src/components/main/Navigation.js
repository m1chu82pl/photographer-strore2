import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  function showX() {
    setScrollY(window.pageYOffset.toFixed(2));
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", showX);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", showX);
    };
  }, []);

  return (
    <nav>
      <div className={scrollY <= 1000 ? styles.position : styles.positionActive }>Scroll position: {scrollY} px</div>
      <ul className={styles.wrapper}>
        <li className={styles.navigationPoint}>
          <NavLink
            exact
            activeClassName={styles.navigationPointNavLinkActive}
            className={styles.navigationPointNavLink}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink
            activeClassName={styles.navigationPointNavLinkActive}
            className={styles.navigationPointNavLink}
            to="/nature"
          >
            nature
          </NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink
            activeClassName={styles.navigationPointNavLinkActive}
            className={styles.navigationPointNavLink}
            to="/portrait"
          >
            portrait
          </NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink
            activeClassName={styles.navigationPointNavLinkActive}
            className={styles.navigationPointNavLink}
            to="/documentary"
          >
            documentary
          </NavLink>
        </li>
        <li className={styles.navigationPoint}>
          <NavLink
            activeClassName={styles.navigationPointNavLinkActive}
            className={styles.navigationPointNavLink}
            to="/architecture"
          >
            architecture
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
