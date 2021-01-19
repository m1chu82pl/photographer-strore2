import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [navPosition, setNavPosition] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  const ulRef = useCallback((node) => {
    if (node !== null) {
      // setNavPosition(node.getBoundingClientRect().y.toFixed(1));
      setNavPosition(node.offsetTop.toFixed(1));
      // console.log(node.getBoundingClientRect());
      // console.log("-----TUTAJ-----", node.offsetTop);
    }
  }, []);

  // console.log("nav position: ", navPosition);
  // console.log("scroll: ", scrollPosition);

  const handleScroll = () => {
    const position = window.pageYOffset.toFixed(1);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={ulRef}>
      {scrollPosition < navPosition - 1 ? (
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
      ) : (
        <div className={styles.wrapperSticky}>
          <ul className={styles.wrapperStickyNav}>
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
        </div>
      )}
    </nav>
  );
};

export default Navigation;
