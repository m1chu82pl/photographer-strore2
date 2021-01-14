import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  const ulRef = React.createRef();

  const showPositionY = () => {
    if (ulRef.current !== null) {
      const { y } = ulRef.current.getBoundingClientRect();
      setScrollY(y);
      console.log('menu od góry ekranu: ', y);
    }
  };

  useEffect(() => {  
    window.addEventListener("scroll", showPositionY);
    return () => {
      window.removeEventListener("scroll", showPositionY);
    };
  });

  return (
    <nav>
      {/* <div
        className={scrollY >= 0 ? styles.position : styles.positionSticky}
      >
        Scroll position: {scrollY} px
      </div> */}
      <div className={styles.checker} ref={ulRef}>s</div>
      <ul className={scrollY >= 0 ? styles.wrapper : styles.wrapperSticky} >
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
