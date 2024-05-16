import React from "react";
import { ContainerStyled } from "../assets/styles/globalStyles";
import StateSelectMenu from "../components/location/StateSelectMenu";
import CitySelectMenu from "../components/location/CitySelectMenu";
import CityInfo from "../components/location/CityInfo";
import styled from "styled-components";

const ContainerLocation = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 700px){
    grid-auto-flow: column;
    
  }
`;

function LocationData() {
  return (
    <ContainerStyled>
      <ContainerLocation>
        <StateSelectMenu />
        <CitySelectMenu />
      </ContainerLocation>
      <CityInfo />
    </ContainerStyled>
  );
}

export default LocationData;
