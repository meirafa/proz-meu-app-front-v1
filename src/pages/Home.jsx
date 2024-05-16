import React from "react";
import { ContainerStyled } from "../assets/styles/globalStyles";
import ImgHome from "../assets/images/brazil.jpg";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  gap: 2rem;
  align-content: center;
  padding-top: 3.5rem;

  @media (max-width: 700px) {
    grid-auto-flow: row;
  }
`;

const HomeText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
`;

const HomeImage = styled.div`
  img {
    max-width: 25em;
    
    @media (max-width: 700px){
      width: 17.3rem;
    }
  }
`;

function Home() {
  return (
    <>
      <ContainerStyled>
        <HomeContainer>
          <HomeText>
            Baseado na riqueza de dados do Instituto Brasileiro de Geografia e
            Estatística (IBGE), esta plataforma intuitiva permite aos usuários
            explorar e analisar facilmente informações geográficas e
            demográficas, com foco na visualização de dados detalhados sobre as
            regiões do Brasil e na frequência de nomes por década de nascimento.
          </HomeText>
          <HomeImage>
            <img src={ImgHome} alt="Foto de uma cidade" />
          </HomeImage>
        </HomeContainer>
      </ContainerStyled>
    </>
  );
}

export default Home;
