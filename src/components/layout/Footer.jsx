import React from 'react';

import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.pageTop};
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterText>Dados de Geograficos e Demograficos. Criado em 2024.</FooterText>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
