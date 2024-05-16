import React, { useEffect } from 'react';
import { ContainerStyled } from '../assets/styles/globalStyles';
import RankingInfo from '../components/ranking/RankingInfo';
import { useAppDispatch } from '../redux/hooks/reduxHooks';
import { rankingFetch } from '../redux/actions/actions';
import styled from 'styled-components';

const Heading = styled.h3`
  text-align: center;
  padding-bottom: 1rem;
`;

function NameRanking() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(rankingFetch());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <Heading>Nomes no Brasil e suas evoluções ao decorrer das decadas!</Heading>

      <RankingInfo />
    </ContainerStyled>
  );
}

export default NameRanking;
