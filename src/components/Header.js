import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import StyledNavbar from "../styled-components/StyledNavbar.styles";
import StyledLink from "../styled-components/StyledLink.styles";
import StyledToggle from "../styled-components/StyledToggle.styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { id, setTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  return (
    <StyledNavbar>
      <StyledLink to="/" $isActive={pathname === "/"}>
        Anasayfa
      </StyledLink>
      <StyledLink to="/paramtech" $isActive={pathname === "/paramtech"}>
        Paramtech
      </StyledLink>
      <StyledLink to="/finrota" $isActive={pathname === "/finrota"}>
        Finrota
      </StyledLink>
      <StyledLink to="/kredim" $isActive={pathname === "/kredim"}>
        Kredim
      </StyledLink>
      <StyledToggle onToggle={setTheme} isActive={id === "dark"} />
    </StyledNavbar>
  );
};

export default Header;
