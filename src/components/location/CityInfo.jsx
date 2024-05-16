import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/reduxHooks';

const Container = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
  }
`;

const StyledThead = styled.thead`
  background-color: ${({ theme }) => theme.colors.inputPlaceholder};
`;

const StyledTh = styled.th`
  padding: 0.625rem 0.5rem;
  font-size: ${({ theme }) => theme.fonts.base};
  font-weight: 500;
  text-align: left;
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fonts.sm};
  }
`;

const StyledTbody = styled.tbody``;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const StyledTd = styled.td`
  padding: 0.625rem 0.5rem;
  font-size: ${({ theme }) => theme.fonts.base};
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fonts.sm};
  }
`;

const StyledMapPinIcon = styled.span`
  display: inline;
  margin-top: 0;
  margin-right: 0.5rem;
  height: 2rem;
  width: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  &::before {
    content: '\\1F4CC';
  }
`;

const ImageUf = styled.img`
  width: 10rem;
`;

export default function CityInfo() {
  const info = useAppSelector((state) => state.info);
  const image = useAppSelector((state) => state.image);

  const [categories, setCategories] = useState({});

  useEffect(() => {
    if (info.status === 'SUCCEEDED' && image.status === 'SUCCEEDED') {
      const data = info?.data;

      setCategories({
        Município: {
          id: data.id,
          nome: `Município: ${data.nome}`,
          info1: `Região imediata: ${data['regiao-imediata'].nome}`,
          info2: `UF: ${data['regiao-imediata']['regiao-intermediaria'].UF.nome} (${data['regiao-imediata']['regiao-intermediaria'].UF.sigla})`,
        },
        'Micro e Mesorregiões': {
          id: data.microrregiao.id,
          nome: `Região: ${data['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome}`,
          info1: `Microrregião: ${data.microrregiao.nome}`,
          info2: `Mesorregião: ${data.microrregiao.mesorregiao.nome}`,
        },
        "Mapa do Estado": {
          id: image.selected,
          src: `${image.data}`,
        },
      });
    } else setCategories({});
  }, [info]);

  return (
    <Container>
      {info.status === 'PENDING' && <p>Carregando...</p>}
      {info.status === 'FAILED' && <p>{info.status.error}</p>}
      {info.data && info.status === 'SUCCEEDED' ? (
        <StyledTable>
          <StyledThead>
            <StyledTr>
              <StyledTh>Categoria</StyledTh>
              <StyledTh>Informações</StyledTh>
            </StyledTr>
          </StyledThead>
          <StyledTbody>
            {Object.keys(categories).map((category) => {
              const item = categories[category];
              return (
                <StyledTr key={item.id}>
                  <StyledTd>{category}</StyledTd>
                  <StyledTd>
                    <div>
                      {item.src ? (
                        <ImageUf src={item.src} alt="mapa do estado" />
                      ) : (
                        <>
                          <StyledMapPinIcon aria-hidden="true" />
                          <strong>{item.nome.split(':')[0]}:</strong>
                          {item.nome.split(':')[1]}
                        </>
                      )}
                    </div>
                    {item.info1 && (
                      <div>
                        <strong>{item.info1.split(':')[0]}:</strong>
                        {item.info1.split(':')[1]}
                      </div>
                    )}
                    {item.info2 && (
                      <div>
                        <strong>{item.info2.split(':')[0]}:</strong>
                        {item.info2.split(':')[1]}
                      </div>
                    )}
                  </StyledTd>
                </StyledTr>
              );
            })}
          </StyledTbody>
        </StyledTable>
      ) : null}
    </Container>
  );
}
