import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const Ranking = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`;

const Heading = styled.p`
  text-align: center;
  padding: 1rem;
`;

const RankingList = styled.div``;

const Span = styled.div`
  float: right;
  padding: 0 1.3rem;
`;

export default function RankingInfo() {
  const ranking = useSelector((state) => state.ranking);

  return (
    <Ranking>
      <Heading>TOP 20 BRASIL</Heading>

      {ranking.status === 'PENDING' && <p>Carregando...</p>}
        {ranking.status === 'FAILED' && <p>{ranking.status.error}</p>}

      {ranking.status === 'SUCCEEDED' &&
        ranking.data?.map((i, c) => (
          <RankingList key={c}>
            <b>{i.rank}º</b> {i.nome}
            <Span>{i.freq.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} HABITANTES</Span>
          </RankingList>
        ))}
    </Ranking>
  );
}
