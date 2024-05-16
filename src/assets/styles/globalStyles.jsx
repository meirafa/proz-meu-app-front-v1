import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

li a.active {
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondary};
}

`;

export const ContainerStyled = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 80vh;
  padding: ${({ theme }) => theme.paddings.container};
  margin: 0 auto;
`;
