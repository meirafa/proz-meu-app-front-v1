import React, { useEffect } from 'react';

import { citiesFetch, imageFetch, statesFetch } from '../../redux/actions/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import InputSelect from '../common/InputSelect';
import { citiesSlice, imageSlice, statesSlice } from '../../redux/reducers/reducers';

export default function StateSelectMenu() {
  const dispatch = useAppDispatch();
  const states = useAppSelector((state) => state.states);

  useEffect(() => {
    dispatch(statesFetch());
  }, [dispatch]);

  const handleSelect = (value) => {
    dispatch(statesSlice.actions.select(value));
    dispatch(citiesSlice.actions.select(''));
    dispatch(imageSlice.actions.select(value));

    if (value) {
      dispatch(citiesFetch(value));
      dispatch(imageFetch(value));
    }
  };

  return (
    <InputSelect
      dataList={states?.data}
      labelText={'Escolha um estado'}
      buttonText={states?.status === 'PENDING' ? 'Carregando...' : 'Escolha um estado.'}
      isDisable={states?.status !== 'SUCCEEDED'}
      reduxState={states}
      onSelect={handleSelect}
      parseSelectedOption={(item) => {
        return {
          value: item.sigla,
          label: item.nome,
        };
      }}
      status={states?.status}
    />
  );
}
