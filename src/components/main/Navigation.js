import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  function showY() {
    setScrollY(window.pageYOffset.toFixed(2));
  }

  const ulRef = React.createRef();

  const onScroll = (event) => {
    ulRef.current.getBoundingClientRect(event);
    console.log("scrolling...");
  };

  useEffect(() => {
    const windowTop = () => {
      window.addEventListener("scroll", onScroll);
    };
    const watchScroll = () => {
      window.addEventListener("scroll", showY);
    };

    windowTop();
    watchScroll();
    return () => {
      window.removeEventListener("scroll", windowTop);
      window.removeEventListener("scroll", showY);
    };
  }, []);

  return (
    <nav>
      <div
        className={scrollY <= 1000 ? styles.position : styles.positionActive}
      >
        Scroll position: {scrollY} px
      </div>
      <ul className={styles.wrapper} ref={ulRef}>
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
