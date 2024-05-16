import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    justify-content: flex-end;
  }
`;

const NavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.md};
  padding: ${({ theme }) => theme.paddings.pageTop};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }
  &:active {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.md};
  padding: ${({ theme }) => theme.paddings.container};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ButtonLink = styled.button`
  margin: ${({ theme }) => theme.paddings.pageTop};
  background-color: ${({ theme }) => theme.colors.without};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 700px) {
    display: none;
  }
`;

const ExtendedNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    display: none;
  }
`;

function Header() {
  const location = useLocation();

  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink to="/">Início</NavbarLink>
        <NavbarLink to="/location">Dados de Localidade</NavbarLink>
        <NavbarLink to="/names">Ranking de Nomes</NavbarLink>
        <ButtonLink onClick={() => setExtendNavbar((curr) => !curr)}>
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </ButtonLink>
      </NavbarLinkContainer>
      {extendNavbar && (
        <ExtendedNavbar>
          <NavbarLinkExtended to="/">Início</NavbarLinkExtended>
          <NavbarLinkExtended to="/location">Dados de Localidade</NavbarLinkExtended>
          <NavbarLinkExtended to="/names">Ranking de Nomes</NavbarLinkExtended>
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
}

export default Header;
