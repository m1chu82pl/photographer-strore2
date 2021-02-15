import React, { useState, useEffect, useCallback } from "react";
import {
  NavigationPoint,
  NavLinks,
  Wrapper,
  WrapperSticky,
  WrapperStickyNav,
} from "./Navigation.styled";

const Navigation = () => {
  const [navPosition, setNavPosition] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  const ulRef = useCallback((node) => {
    if (node !== null) {
      setNavPosition(node.offsetTop.toFixed(1));
    }
  }, []);

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
        <Wrapper>
          <NavigationPoint>
            <NavLinks exact to="/">
              home
            </NavLinks>
          </NavigationPoint>
          <NavigationPoint>
            <NavLinks to="/nature">nature</NavLinks>
          </NavigationPoint>
          <NavigationPoint>
            <NavLinks to="/portrait">portrait</NavLinks>
          </NavigationPoint>
          <NavigationPoint>
            <NavLinks to="/documentary">documentary</NavLinks>
          </NavigationPoint>
          <NavigationPoint>
            <NavLinks to="/architecture">architecture</NavLinks>
          </NavigationPoint>
        </Wrapper>
      ) : (
        <WrapperSticky>
          <WrapperStickyNav>
            <NavigationPoint>
              <NavLinks exact to="/">
                home
              </NavLinks>
            </NavigationPoint>
            <NavigationPoint>
              <NavLinks to="/nature">nature</NavLinks>
            </NavigationPoint>
            <NavigationPoint>
              <NavLinks to="/portrait">portrait</NavLinks>
            </NavigationPoint>
            <NavigationPoint>
              <NavLinks to="/documentary">documentary</NavLinks>
            </NavigationPoint>
            <NavigationPoint>
              <NavLinks to="/architecture">architecture</NavLinks>
            </NavigationPoint>
          </WrapperStickyNav>
        </WrapperSticky>
      )}
    </nav>
  );
};

export default Navigation;
