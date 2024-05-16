import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import InputSelect from '../common/InputSelect';
import { citiesSlice } from '../../redux/reducers/reducers';
import { infoFetch } from '../../redux/actions/actions';

export default function CitySelectMenu() {
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state) => state.cities);

  useEffect(() => {
    if (cities?.selected) {
      dispatch(infoFetch(cities.selected));
    }
  }, [cities.selected]);

  const handleSelect = (value) => {
    dispatch(citiesSlice.actions.select(value));
  };

  return (
    <InputSelect
      dataList={cities.data}
      labelText={
        cities.status === 'SUCCEEDED'
          ? 'Escolha uma cidade ou digite o nome.'
          : 'Escolha um estado para ver as cidades.'
      }
      buttonText={cities.status === 'PENDING' ? 'Carregando...' : 'Digite o nome da cidade.'}
      isDisable={cities.status !== 'SUCCEEDED'}
      reduxState={cities}
      onSelect={handleSelect}
      parseSelectedOption={(item) => {
        return {
          value: item.id,
          label: item.nome,
        };
      }}
      status={cities.status}
    />
  );
}
